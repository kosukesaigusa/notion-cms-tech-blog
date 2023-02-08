import fs from 'fs'

import { Box } from '@chakra-ui/react'
import matter from 'gray-matter'

import ContentContainer from '../components/ContentContainer'
import { EXPORTED_POSTS_PATH } from '../constants/constants'
import { jaYYYYMMDD } from '../utils/date'

export default function TopPage({
  postMetadata,
}: {
  postMetadata: PostMetadata[]
}) {
  return (
    <Box>
      <ContentContainer>
        <ul>
          {postMetadata.map((metadata) => (
            <li key={metadata.pageId}>
              <a href={`/posts/${metadata.slug}`}>
                {metadata.title} ({metadata.pageId})
              </a>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Box>
  )
}

/** Fetches posts from markdown files */
export const getStaticProps = async (): Promise<{
  props: {
    postMetadata: PostMetadata[]
  }
}> => {
  const postFiles = fs.readdirSync(EXPORTED_POSTS_PATH).reverse()
  const postMetadata = postFiles.map((postFileName) => {
    const fileContent = fs.readFileSync(
      `${EXPORTED_POSTS_PATH}/${postFileName}`,
      'utf-8'
    )
    const { data } = matter(fileContent)
    const pageId = data.pageId as string
    const slug = data.slug as string
    const title = data.title as string
    const createdAt = jaYYYYMMDD(data.createdAt)
    const tags = data.tags as string[]
    const description = data.description as string
    const isDraft = data.isDraft as boolean
    return { pageId, slug, createdAt, title, tags, description, isDraft }
  })
  return { props: { postMetadata } }
}
