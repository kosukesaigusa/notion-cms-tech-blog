import { Box } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer'
import { CustomHead } from '../components/CustomHead'
import { Posts } from '../components/Post'
import { fetchPostsAsStaticProps } from '../features/posts/fetch-posts'

export default function TopPage({
  postMetadata,
}: {
  postMetadata: PostMetadata[]
}) {
  return (
    <>
      <CustomHead />
      <Box mt={6}>
        <ContentContainer>
          <Posts postMetadata={postMetadata} />
        </ContentContainer>
      </Box>
    </>
  )
}

export const getStaticProps = async (): Promise<{
  props: {
    postMetadata: PostMetadata[]
  }
}> => fetchPostsAsStaticProps()
