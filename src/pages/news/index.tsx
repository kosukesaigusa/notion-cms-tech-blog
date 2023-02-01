import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'

export default function NewsPage({ news }: { news: NewsSummary[] }) {
  return (
    <Box>
      <ContentContainer>a</ContentContainer>
    </Box>
  )
}

// TODO: コメントを追加する
/** */
// export const getStaticProps = (): {
//   props: {
//     news: {
//       slug: string
//       createdAt: string
//       title: string
//       imageUrl: string
//       description: string
//     }[]
//   }
// } => {
//   const newsFiles = fs.readdirSync('src/news-articles').reverse()
//   const news = newsFiles.map((fileName) => {
//     const slug = fileName.replace(/\.md$/, '')
//     const fileContent = fs.readFileSync(
//       `src/news-articles/${fileName}`,
//       'utf-8'
//     )
//     const { data } = matter(fileContent)
//     const createdAt = jaYYYYMMDD(data.createdAt)
//     const title = data.title as string
//     const imageUrl = data.imageUrl as string
//     const description = data.description as string
//     return { slug, createdAt, title, imageUrl, description }
//   })
//   return { props: { news } }
// }
