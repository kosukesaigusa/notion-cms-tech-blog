import { Client } from '@notionhq/client'

import { NOTION_API_KEY, NOTION_DATABASE_ID } from './env'

/** Notion API Client by given Notion API key. */
export const notionClient = new Client({ auth: NOTION_API_KEY })

/** Queries pages of given Notion database. */
export const queryDatabase = async () =>
    await notionClient.databases.query({
        database_id: NOTION_DATABASE_ID
        // TODO: ページサイズをちょうどよく調整する。
        // page_size: 10,
    })
