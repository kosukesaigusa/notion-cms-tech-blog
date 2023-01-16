import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import About from '../../components/about-page/About'
import Background from '../../components/about-page/Background'
import Corporate from '../../components/about-page/Corporate'
import Message from '../../components/about-page/Message'
import Origin from '../../components/about-page/Origin'
import Publications from '../../components/about-page/Publications'
import SectionContainer from '../../components/top-page/SectionContainer'

export default function AboutPage() {
  return (
    <Box>
      <MainVisual title={'私たちについて'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'about'} title={'MOTTAI とは'}>
          <About />
        </SectionContainer>
        <SectionContainer id={'background'} title={'設立の背景'}>
          <Background />
        </SectionContainer>
        <SectionContainer id={'origin'} title={'MOTTAI の由来'}>
          <Origin />
        </SectionContainer>
        <SectionContainer id={'message'} title={'代表からのメッセージ'}>
          <Message />
        </SectionContainer>
        <SectionContainer id={'publications'} title={'実績・メディア掲載'}>
          <Publications />
        </SectionContainer>
        <SectionContainer id={'corporate'} title={'法人概要'}>
          <Corporate />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
