import { Box } from '@chakra-ui/react'

import ContentContainer from '../../../components/ContentContainer'
import MainVisual from '../../../components/MainVisual'
import TopicPath from '../../../components/TopicPath'
import Donation from '../../../components/support-page/Donation'
import SectionContainer from '../../../components/top-page/SectionContainer'

export default function DonationPage() {
  return (
    <Box>
      <MainVisual title={'寄付によるサポート'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'donation'} title={'寄付によるサポート'}>
          <Donation />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
