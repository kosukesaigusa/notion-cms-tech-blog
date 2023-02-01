import fs from 'fs'

import { Box, Divider, Text } from '@chakra-ui/react'
import matter from 'gray-matter'

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

export default function NewsArticle({ pageId }: { pageId: string }) {
  return (
    <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
      <Text>ページ ID：{pageId}</Text>
      {/* <Heading fontSize={'md'}>{newsArticle.summary.title}</Heading>
      <Text>投稿日：{newsArticle.summary.createdAt}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer(customChakraUIRenderTheme)}
        skipHtml
      >
        {newsArticle.content}
      </ReactMarkdown> */}
    </Box>
  )
}

// TODO: コメントを書く
/**  */
export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  // TODO: slug と pageId を区別する
  const fileContent = fs.readFileSync(
    `exported_posts/${params.slug}.md`,
    'utf-8'
  )
  const { data, content } = matter(fileContent)
  const slug = params.slug
  // const createdAt = jaYYYYMMDD(data.createdAt)
  // const title = data.title as string
  // const imageUrl = data.imageUrl as string
  // const description = data.description as string
  const createdAt = ''
  const title = 'タイトル'
  const imageUrl = ''
  const description = '説明'
  const newsArticle: NewsArticle = {
    summary: { slug, createdAt, title, imageUrl, description },
    content,
  }
  return { props: { newsArticle } }
}

// TODO: コメントを書く
/**  */
export const getStaticPaths = () => {
  const newsFiles = fs.readdirSync('exported_posts')
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
