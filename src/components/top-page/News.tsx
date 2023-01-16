import { Box, Grid } from '@chakra-ui/react'

import { CommonText } from '../Common'
import NewsCardGridItem from '../NewsCardGridItem'

export default function News({ news }: { news: NewsSummary[] }) {
  return (
    <Box>
      <CommonText text="MOTTAIの最新の活動やニュースを更新しています。" />
      <Box mb={8}>
        <NewsGrid news={news} />
      </Box>
    </Box>
  )
}

function NewsGrid({ news }: { news: NewsSummary[] }) {
  const newsGridItem = []
  for (const n of news) {
    newsGridItem.push(NewsCardGridItem(n))
  }
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={[6]}
    >
      {newsGridItem}
    </Grid>
  )
}
