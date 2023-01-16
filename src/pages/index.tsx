import { Box } from '@chakra-ui/react'

import { queryDatabase, retrievePage } from '../api/query-notion-db'
import ContentContainer from '../components/ContentContainer'
import { parseProperties, Post } from '../utils/parser-properties'

export default function TopPage({ posts }: { posts: Post[] }) {
  return (
    <Box>
      <ContentContainer>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </ContentContainer>
    </Box>
  )
}

// TODO: コメントを追加する
/** Notion API をコールして、記事一覧からタイトル一覧を取得する。 */
export const getStaticProps = async () => {
  const queryDatabaseResponse = await queryDatabase()
  const posts = parseProperties(queryDatabaseResponse)
  const pageId = posts[2].id
  const getPageResponse = await retrievePage(pageId)
  console.log(getPageResponse)
  return { props: { posts } }
}
