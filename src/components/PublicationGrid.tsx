import { Grid } from '@chakra-ui/react'

import PublicationGridItem from './PublicationGridItem'

const publicationItems = [
  {
    title: 'TEDx Keio USFC 登壇',
    imageUrl: '/images/youtube-1-tedx.webp',
    href: 'https://www.youtube.com/watch?v=nAWJgywLsAw&ab_channel=TEDxTalks"',
  },
  {
    title: '食べるを考える',
    imageUrl: '/images/youtube-2-taberu-wo-kangaeru.webp',
    href: 'https://www.youtube.com/watch?v=KiLChQ3Mwkg&feature=youtu.be&ab_channel=NANAME',
  },
  {
    title: 'ANN News "食"のウラ側にある命の重さを考える',
    imageUrl: '/images/youtube-3-sdgs.webp',
    href: 'https://www.youtube.com/watch?v=KiLChQ3Mwkg&feature=youtu.be&ab_channel=NANAME',
  },
]

export default function PublicationGrid() {
  const publications = []
  for (const publicationItem of publicationItems) {
    publications.push(PublicationGridItem(publicationItem))
  }

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={[12, 6]}
    >
      {publications}
    </Grid>
  )
}
