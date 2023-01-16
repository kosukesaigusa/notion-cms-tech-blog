import fs from 'fs'

import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

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
import TopicPath from '../../components/TopicPath'
import { jaYYYYMMDD } from '../../utils/date'

export default function NewsArticle({
  newsArticle,
}: {
  newsArticle: NewsArticle
}) {
  return (
    <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
      <TopicPath />
      <Heading fontSize={'md'}>{newsArticle.summary.title}</Heading>
      <Text>投稿日：{newsArticle.summary.createdAt}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer(customChakraUIRenderTheme)}
        skipHtml
      >
        {newsArticle.content}
      </ReactMarkdown>
    </Box>
  )
}

// TODO: コメントを書く
/**  */
export function getStaticProps({ params }: { params: { slug: string } }) {
  const fileContent = fs.readFileSync(
    `src/news-articles/${params.slug}.md`,
    'utf-8'
  )
  const { data, content } = matter(fileContent)
  const slug = params.slug
  // const createdAt = data.createdAt as string
  const createdAt = jaYYYYMMDD(data.createdAt)
  const title = data.title as string
  const imageUrl = data.imageUrl as string
  const description = data.description as string
  const newsArticle: NewsArticle = {
    summary: { slug, createdAt, title, imageUrl, description },
    content,
  }
  return { props: { newsArticle } }
}

// TODO: コメントを書く
/**  */
export function getStaticPaths() {
  const newsFiles = fs.readdirSync('src/news-articles')
  const paths = newsFiles.map((fileName) => ({
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
  hr: (_: any) => {
    return <Divider my={8} />
  },
}
