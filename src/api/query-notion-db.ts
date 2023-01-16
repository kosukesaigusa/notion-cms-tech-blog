import { notionClient } from './notion-client'

export const queryDatabase = async () =>
  await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
  })
