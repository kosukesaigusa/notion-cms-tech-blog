import {
    PageObjectResponse,
    QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

/** Self-defined Notion page type. */
export type NotionPage = {
    pageId: string
    title: string
    slug: string
    createdAt: string
}

/** Parse Notion page properties. */
export const parseProperties = (
    response: QueryDatabaseResponse
): NotionPage[] =>
    response.results.map((pageObjectResponse) => {
        const pageId = pageObjectResponse.id
        const page = pageObjectResponse as PageObjectResponse
        const title = titleFromPageObjectResponse(page)
        const slug = slugFromPageObjectResponse(page)
        const createdAt = createdAtFromPageObjectResponse(page)
        return { pageId, title, slug, createdAt }
    })

/** Parse Notion page title. */
const titleFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.title as {
        type: 'title'
        title: { plain_text: string }[]
    }
    return property.title[0].plain_text
}

/** Parse Notion page title. */
const slugFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.slug as {
        type: 'rich_text'
        rich_text: { plain_text: string }[]
    }
    return property.rich_text[0].plain_text
}

const createdAtFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.createdAt as {
        type: 'date'
        date: { start: string }
    }
    return property.date.start
}

/**  */
const validateNotionPage = ({ title: string }: { title: string }) => {}
