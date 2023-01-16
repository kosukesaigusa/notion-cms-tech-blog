import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import { HowToSupport } from '../../components/support-page/HowToSupport'
import RequestSupportMessage from '../../components/support-page/RequestSupportMessage'
import SectionContainer from '../../components/top-page/SectionContainer'

export default function SupportPage() {
  return (
    <Box>
      <MainVisual title={'MOTTAIをサポートする'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'request-support-message'} title={'MOTTAIの想い'}>
          <RequestSupportMessage />
        </SectionContainer>
        <SectionContainer id={'how-to-support'} title={'MOTTAIをサポートする'}>
          <HowToSupport />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
