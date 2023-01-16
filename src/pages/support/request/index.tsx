import { Box } from '@chakra-ui/react'

import ContentContainer from '../../../components/ContentContainer'
import MainVisual from '../../../components/MainVisual'
import TopicPath from '../../../components/TopicPath'
import Request from '../../../components/support-page/Request'
import SectionContainer from '../../../components/top-page/SectionContainer'

export default function RequestPage() {
  return (
    <Box>
      <MainVisual title={'講演依頼などでサポート'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'request'} title={'講演依頼などでサポート'}>
          <Request />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
