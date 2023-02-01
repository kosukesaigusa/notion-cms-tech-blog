import console from 'console'
import fs from 'fs/promises'

import { NotionToMarkdown } from 'notion-to-md'

import { notionClient, queryDatabase } from './notion-api'
import { NotionPage, parseProperties } from './parse-notion-page'

/** Path to exported markdown files will be saved. */
const EXPORTED_POSTS_RELATIVE_PATH = 'exported-posts'

/** Notion to markdown package client. */
const n2m = new NotionToMarkdown({ notionClient: notionClient })

/* Fetch posts in the specified database and export markdown files from them.  */
const exportMarkdownsFromNotionDatabase = async () => {
    const queryDatabaseResponse = await queryDatabase()
    const posts = parseProperties(queryDatabaseResponse)
    console.log(`posts count: ${posts.length}`)
    for (const post of posts) {
        await writeMarkdownFile(post)
    }
}

/** Write markdown file of given post data. */
const writeMarkdownFile = async (notionPage: NotionPage) => {
    const pageId = notionPage.pageId
    const title = notionPage.title
    const slug = notionPage.slug
    console.log(`💬 exporting post: ${title} (${pageId})`)
    const mdBlocks = await n2m.pageToMarkdown(pageId)
    const mdString = `# ${title}\n${n2m.toMarkdownString(mdBlocks)}`
    try {
        await fs.writeFile(
            `${EXPORTED_POSTS_RELATIVE_PATH}/${slug}.md`,
            mdString
        )
        console.info(`🙌 Successfully exported: ${title} (${pageId})`)
    } catch (e) {
        console.error(
            `🚨 An error occurred when exporting page: ${title} (${pageId}): ${e}`
        )
    }
}

/** Execute task. */
;(async () => {
    await exportMarkdownsFromNotionDatabase()
})()
