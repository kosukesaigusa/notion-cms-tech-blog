import fs from 'fs'

import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { CodeBlock, CodeBlockProps } from '../../components/CodeBlock'
import {
  CommonExternalLinkText,
  CommonH2,
  CommonH3,
  CommonH4,
  CommonImage,
  CommonListItem,
  CommonOrderedList,
  CommonText,
  CommonUnorderedList,
} from '../../components/Common'
import { EXPORTED_POSTS_PATH } from '../../constants/constants'
import { jaYYYYMMDD } from '../../utils/date'

export default function PostArticle({ post }: { post: Post }) {
  return (
    <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
      {/* <TopicPath /> */}
      <Heading fontSize={'md'}>{post.metadata.title}</Heading>
      <Text>投稿日：{post.metadata.createdAt}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer(customChakraUIRenderTheme)}
        skipHtml
      >
        {post.content}
      </ReactMarkdown>
    </Box>
  )
}

// TODO: コメントを書く
/**  */
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

// TODO: コメントを書く
/**  */
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

/** */
const customChakraUIRenderTheme = {
  // TODO: 本当は any はやめたい
  h2: (props: any) => {
    return <CommonH2 text={props.children} />
  },
  h3: (props: any) => {
    return <CommonH3 text={props.children} />
  },
  h4: (props: any) => {
    return <CommonH4 text={props.children} />
  },
  p: (props: any) => {
    return <CommonText text={props.children} />
  },
  a: (props: any) => {
    return <CommonExternalLinkText href={props.href} text={props.children} />
  },
  ul: (props: any) => {
    return <CommonUnorderedList>{props.children}</CommonUnorderedList>
  },
  ol: (props: any) => {
    return <CommonOrderedList>{props.children}</CommonOrderedList>
  },
  li: (props: any) => {
    return <CommonListItem>{props.children}</CommonListItem>
  },
  img: (props: any) => {
    return <CommonImage src={props.src} alt={props.alt}></CommonImage>
  },
  code: (props: CodeBlockProps) => {
    return (
      <CodeBlock inline={props.inline} className={props.className}>
        {props.children}
      </CodeBlock>
    )
  },
  hr: (_: any) => {
    return <Divider my={8} />
  },
}
