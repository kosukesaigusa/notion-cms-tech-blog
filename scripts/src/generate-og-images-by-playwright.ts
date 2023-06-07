import { chromium, Browser, Page, BrowserContext } from 'playwright'
import ejs from 'ejs'
import { readFile } from 'fs/promises'
import fs from 'fs/promises'
import { EXPORTED_POSTS_RELATIVE_PATH, OG_IMAGES_PATH } from './constants'
import path from 'path'

/** Once removes og images directory and make a new one. */
const makeOgImagesDirectory = async () => {
    await fs.rm(OG_IMAGES_PATH, { recursive: true })
    await fs.mkdir(OG_IMAGES_PATH, { recursive: true })
}

const generateAllOGPImages = async () => {
    await makeOgImagesDirectory()

    const postFilePaths = (
        await fs.readdir(EXPORTED_POSTS_RELATIVE_PATH)
    ).reverse()
    for (const postFileName of postFilePaths) {
        await generateOGPImage(
            postFileName,
            'KosukeSaigusa',
            'https://2.gravatar.com/avatar/d6d15e8595ba956a4738d36b25ef8c96?size=80'
        )
    }
}

const generateOGPImage = async (
    title: string,
    authorName: string,
    authorImageUrl: string
): Promise<void> => {
    const browser = await chromium.launch()
    const context = await browser.newContext({
        viewport: { width: 1200, height: 630 }
    })
    const page = await context.newPage()

    // Load the EJS template
    const template = await readFile('src/ogp-template.ejs', 'utf-8')
    const html = ejs.render(template, {
        title,
        authorName,
        authorImageUrl
    })

    // Render the HTML in Playwright
    await page.setContent(html)

    // Take a screenshot
    await page.screenshot({ path: path.join(OG_IMAGES_PATH, title + '.png') })

    await browser.close()
}

/** Executes task. */
;(async () => {
    await generateAllOGPImages()
})()
