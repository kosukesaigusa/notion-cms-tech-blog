import { Box, GridItem, Image, Text } from '@chakra-ui/react'

import SecondaryLinkButton from './buttons/SecondaryLinkButton'

export default function NewsGridItem(news: NewsSummary) {
  return (
    <GridItem key={news.title}>
      <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={news.imageUrl} alt={news.title} />
        <Box p="4">
          <Text mb="2" noOfLines={1} fontSize={'xs'}>
            {news.createdAt}
          </Text>
          <Text
            mb="2"
            fontSize="lg"
            fontWeight="semibold"
            as="h3"
            noOfLines={1}
          >
            {news.title}
          </Text>
          <Text noOfLines={4} mb="2" fontSize={'sm'}>
            {news.description}
          </Text>
          <SecondaryLinkButton
            text={'記事を読む'}
            href={`/news/${news.slug}`}
          />
        </Box>
      </Box>
    </GridItem>
  )
}
