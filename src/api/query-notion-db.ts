import { notionClient } from './notion-client'

/** 指定した Notion DB の記事一覧をクエリする。 */
export const queryDatabase = async () =>
  await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    // TODO: ページサイズをちょうどよく調整する。
    // page_size: 10,
  })
