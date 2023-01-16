import { Client } from '@notionhq/client'

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? ''

export const notionClient = new Client({ auth: NOTION_API_KEY })
