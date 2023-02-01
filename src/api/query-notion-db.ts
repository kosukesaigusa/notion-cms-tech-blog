import { notionClient } from './notion-client'

/** 指定した Notion DB の記事一覧をクエリする。 */
export const queryDatabase = async () =>
  await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    // TODO: ページサイズをちょうどよく調整する。
    // page_size: 10,
  })

/** 指定した pageId の Notion ページを取得する。 */
export const retrievePage = async (pageId: string) =>
  await notionClient.pages.retrieve({
    page_id: pageId,
  })

/** 指定した blockId の Block 一覧を取得する。 */
export const listBlockChildren = async (blockId: string) =>
  await notionClient.blocks.children.list({
    block_id: blockId,
    // TODO: ページサイズをちょうどよく調整する。
    // page_size: 10,
  })

/** 指定した blockId の Block 一覧を取得する。 */
export const retrieveBlocks = async (blockId: string) =>
  await notionClient.blocks.retrieve({
    block_id: blockId,
  })
