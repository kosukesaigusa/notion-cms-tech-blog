import { Box, Heading } from '@chakra-ui/react'

import { CommonListItem, CommonText, CommonUnorderedList } from '../Common'
import PublicationGrid from '../PublicationGrid'

export default function Publications() {
  return (
    <Box>
      <Box mb={4}>
        <Heading mt={6} mb={4} as={'h3'} size={'md'} fontWeight={'bold'}>
          実績
        </Heading>
        <CommonText text="NPO法人MOTTAIや、法人設立前の代表等の活動実績は次の通りです。" />
        <CommonUnorderedList>
          <CommonListItem>
            日経ソーシャルビジネスコンテストファイナリスト
          </CommonListItem>
          <CommonListItem>KEIO BUSINESS CONTEST 審査員特別賞</CommonListItem>
          <CommonListItem>
            TokyoStartup Gateway セミファイナリスト
          </CommonListItem>
        </CommonUnorderedList>
      </Box>
      <Box mb={4}>
        <Heading mt={6} mb={4} as={'h3'} size={'md'} fontWeight={'bold'}>
          メディア掲載
        </Heading>
        <CommonText text="過去に次のようなメディア等に掲載されました（順不同）。" />
        <CommonText text="読売新聞、読売中高生新聞、日経新聞、神奈川新聞、神静民報、千葉日報、タウンニュース藤沢版人物風土記、yahoo news、NEUT Magazine、ONE MEDIA、ソトコト、農業フリーペーパー「VOICE」、小田原市広報紙、独立メディア塾、SHONAN MAGIC WAVE、TBS 「DOOO」、日テレ「the SOCIAL」、TEDxKeioUSFC、JCOM、たべるを考える、...等" />
        <Box my={4}>
          <PublicationGrid />
        </Box>
      </Box>
    </Box>
  )
}
