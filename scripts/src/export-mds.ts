import console from 'console'
import fs from 'fs/promises'

import { NotionToMarkdown } from 'notion-to-md'

import { notionClient, queryDatabase } from './notion-api'
import { NotionPage, parseProperties } from './parse-notion-page'

/** Path to exported markdown files will be saved. */
const EXPORTED_POSTS_RELATIVE_PATH = '../exported-posts'

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

/** Writes markdown file of given post data. */
const writeMarkdownFile = async (notionPage: NotionPage) => {
    const pageId = notionPage.pageId
    const title = notionPage.title
    const slug = notionPage.slug
    console.log(`💬 exporting post: ${title} (${pageId})`)
    const mdString = await createMarkdownStringByPage(notionPage)
    await makeExportedDirectory()
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

/** Returns string to be exported ad Markdown file from given Notion page. */
const createMarkdownStringByPage = async (
    notionPage: NotionPage
): Promise<string> => {
    const pageId = notionPage.pageId
    const mdBlocks = await n2m.pageToMarkdown(pageId)
    return `${createMarkdownHeader(notionPage)}

${n2m.toMarkdownString(mdBlocks)}
`
}

/** Creates Markdown header. */
const createMarkdownHeader = (notionPage: NotionPage) => {
    return `---
title: '${notionPage.title}'
slug: '${notionPage.slug}'
createdAt: '${notionPage.createdAt}'
tags: '${notionPage.tags}'
description: '${notionPage.description}'
isDraft: ${notionPage.isDraft}
---`
}

/** Makes exported directory if not exists */
const makeExportedDirectory = async () => {
    try {
        await fs.access(EXPORTED_POSTS_RELATIVE_PATH)
    } catch (_) {
        await fs.mkdir(EXPORTED_POSTS_RELATIVE_PATH)
    }
}

/** Executes task. */
;(async () => {
    await exportMarkdownsFromNotionDatabase()
})()
