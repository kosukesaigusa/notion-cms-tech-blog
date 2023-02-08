import {
    PageObjectResponse,
    QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

/** Self-defined Notion page type. */
export type NotionPage = {
    pageId: string
    slug: string
    title: string
    createdAt: string
    tags: string[]
    description: string
    isDraft: boolean
}

/** Parse Notion page properties. */
export const parseProperties = (
    response: QueryDatabaseResponse
): NotionPage[] =>
    response.results.map((pageObjectResponse) => {
        const pageId = pageObjectResponse.id
        const page = pageObjectResponse as PageObjectResponse
        const slug = slugFromPageObjectResponse(page)
        const title = titleFromPageObjectResponse(page)
        const createdAt = createdAtFromPageObjectResponse(page)
        const tags = tagsFromPageObjectResponse(page)
        const description = descriptionFromPageObjectResponse(page)
        const isDraft = isDraftFromPageObjectResponse(page)
        validateNotionPage({ slug, title, createdAt, tags, description })
        return { pageId, slug, title, createdAt, tags, description, isDraft }
    })

/** Parse Notion page slug. */
const slugFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.slug as {
        type: 'rich_text'
        rich_text: { plain_text: string }[]
    }
    return property.rich_text[0].plain_text
}

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

/** Parse Notion page createdAt. */
const createdAtFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.createdAt as {
        type: 'date'
        date: { start: string }
    }
    return property.date.start
}

/** Parse Notion page tags. */
const tagsFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string[] => {
    const property = pageObjectResponse.properties.tags as {
        type: 'multi_select'
        multi_select: { id: string; name: string; color: string }[]
    }
    return property.multi_select.map((tag) => tag.name)
}

/** Parse Notion page description. */
const descriptionFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.description as {
        type: 'rich_text'
        rich_text: { plain_text: string }[]
    }
    return property.rich_text[0].plain_text
}

/** Parse Notion page isDraft. */
const isDraftFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): boolean => {
    const property = pageObjectResponse.properties.isDraft as {
        type: 'checkbox'
        checkbox: boolean
    }
    return property.checkbox
}

/**  */
const validateNotionPage = ({
    title,
    slug,
    createdAt,
    tags,
    description
}: {
    title: string
    slug: string
    createdAt: string
    tags: string[]
    description: string
}) => {
    if (title === '') {
        throw Error('🚨 title is required.')
    }
    if (slug === '') {
        throw Error('🚨 slug is required.')
    }
    if (createdAt === '') {
        throw Error('🚨 createdAt is required.')
    }
    if (description === '') {
        throw Error('🚨 description is required.')
    }
}
