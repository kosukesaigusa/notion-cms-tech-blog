import fs from 'fs/promises'

import path from 'path'
import puppeteer from 'puppeteer'
import {
    BASE_INDEX_HTML_PATH,
    EXPORTED_POSTS_RELATIVE_PATH,
    OG_IMAGES_PATH
} from './constants'

// 参考：
// https://macoshita.me/posts/puppeteer-og-image/

/* Create og images. */
const crateOgImages = async () => {
    // await makeOgImagesDirectory()

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.setViewport({ width: 1200, height: 630 })

    await page.goto(`file:${path.resolve(process.cwd(), BASE_INDEX_HTML_PATH)}`)
    await page.waitForSelector('#title')

    const postFilePaths = (
        await fs.readdir(EXPORTED_POSTS_RELATIVE_PATH)
    ).reverse()
    console.log(`💬 Create ${postFilePaths.length} OG images.`)
    for (const postFileName of postFilePaths) {
        console.log(`💬 Start creating OG image of ${postFileName}.`)
        // Page.evaluate executes the first argument function
        // with given parameter as second argument.
        await page.evaluate((postFileName) => {
            const $ = (id: string): HTMLElement => document.getElementById(id)!
            $('title').innerText = postFileName
        }, postFileName)
        await page.screenshot({
            path: path.join(OG_IMAGES_PATH, postFileName + '.png')
        })
    }
    await browser.close()
}

/** Once removes og images directory and make a new one. */
const makeOgImagesDirectory = async () => {
    await fs.rm(OG_IMAGES_PATH, { recursive: true })
    await fs.mkdir(OG_IMAGES_PATH, { recursive: true })
}

/**  */

/** Executes task. */
;(async () => {
    await crateOgImages()
})()
