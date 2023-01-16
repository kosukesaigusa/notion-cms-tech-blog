import { Box, Heading } from '@chakra-ui/react'
import md from 'markdown-it'

export default function NewsArticle({
  frontmatter,
  content,
}: {
  frontmatter: {
    [key: string]: any
  }
  content: string
}) {
  return (
    <Box className="prose mx-auto">
      <Heading>{frontmatter.title}</Heading>
      <Box dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Box>
  )
}
