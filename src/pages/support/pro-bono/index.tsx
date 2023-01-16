import { Box } from '@chakra-ui/react'

import ContentContainer from '../../../components/ContentContainer'
import MainVisual from '../../../components/MainVisual'
import TopicPath from '../../../components/TopicPath'
import ProBono from '../../../components/support-page/ProBono'
import SectionContainer from '../../../components/top-page/SectionContainer'

export default function ProBonoPage() {
  return (
    <Box>
      <MainVisual title={'メンバーとしてサポート'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'pro-bono'} title={'メンバーとしてサポート'}>
          <ProBono />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
