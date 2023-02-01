import {
  PageObjectResponse,
  QueryDatabaseResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

export type Post = {
  id: string
  title: string
}

export const parseProperties = (response: QueryDatabaseResponse): Post[] =>
  response.results.map((row) => {
    const id = row.id
    const titleCell = (
      (row as PageObjectResponse).properties.title as {
        type: 'title'
        title: Array<RichTextItemResponse>
        id: string
      }
    ).title
    const title = titleCell?.[0].plain_text
    return { id, title }
  })
