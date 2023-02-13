import fs from 'fs'

import { Box, Heading, Text } from '@chakra-ui/react'
import matter from 'gray-matter'

import { CustomHead } from '../../components/CustomHead'
import { MarkdownContent } from '../../components/MarkdownContent'
import TopicPath from '../../components/TopicPath'
import { EXPORTED_POSTS_PATH } from '../../constants/constants'
import { jaYYYYMMDD } from '../../utils/date'

export default function PostArticle({ post }: { post: Post }) {
  return (
    <div>
      <PostHead post={post} />
      <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
        <TopicPath />
        <Heading fontSize={'xl'}>{post.metadata.title}</Heading>
        <Text fontSize={'xs'} color={'gray.600'}>
          {post.metadata.createdAt}
        </Text>
        <MarkdownContent content={post.content} />
      </Box>
    </div>
  )
}

const PostHead = ({ post }: { post: Post }) => {
  const metadata = post.metadata
  return (
    <CustomHead
      description={metadata.description}
      // TODO: Gives imageUrl when notion post becomes compatible.
      // ogUrl={metadata.imageUrl}
      ogSiteName={metadata.title}
      ogTitle={metadata.title}
      ogDescription={metadata.description}
      // ogImage={metadata.imageUrl}
      // twitterTitle={metadata.imageUrl}
      twitterDescription={metadata.description}
      // twitterImage={metadata.imageUrl}
    />
  )
}

/** Fetches post from given slug string. */
export function getStaticProps({ params }: { params: { slug: string } }) {
  const fileContent = fs.readFileSync(
    `${EXPORTED_POSTS_PATH}/${params.slug}.md`,
    'utf-8'
  )
  const { data, content } = matter(fileContent)
  const slug = params.slug
  const pageId = data.pageId as string
  const createdAt = jaYYYYMMDD(data.createdAt)
  const title = data.title as string
  const tags = data.tags as string[]
  const description = data.description as string
  const isDraft = data.isDraft as boolean
  const post: Post = {
    metadata: {
      pageId,
      slug,
      createdAt,
      title,
      tags,
      description,
      isDraft,
    },
    content,
  }
  return { props: { post } }
}

/** Fetches all exported post paths. */
export function getStaticPaths() {
  const postFiles = fs.readdirSync(EXPORTED_POSTS_PATH)
  const paths = postFiles.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
