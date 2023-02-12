import { Box, Heading } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import { CustomHead } from '../../components/CustomHead'
import { Posts } from '../../components/Post'
import TopicPath from '../../components/TopicPath'
import { siteDescription, siteTitle } from '../../constants/constants'
import { fetchPostsAsStaticProps } from '../../features/posts/fetch-posts'

export default function PostsPage({
  postMetadata,
}: {
  postMetadata: PostMetadata[]
}) {
  return (
    <div>
      <PostsHead />
      <Box mt={6}>
        <ContentContainer>
          <Heading fontSize={'xl'}>記事一覧</Heading>
          <TopicPath />
          <Posts postMetadata={postMetadata} />
        </ContentContainer>
      </Box>
    </div>
  )
}

const PostsHead = () => {
  return (
    <CustomHead
      ogSiteName={`記事一覧 | ${siteTitle}`}
      ogTitle={`記事一覧 | ${siteTitle}`}
      ogDescription={`記事一覧 | ${siteDescription}`}
      twitterDescription={`記事一覧 | ${siteDescription}`}
    />
  )
}

export const getStaticProps = async (): Promise<{
  props: {
    postMetadata: PostMetadata[]
  }
}> => fetchPostsAsStaticProps()
