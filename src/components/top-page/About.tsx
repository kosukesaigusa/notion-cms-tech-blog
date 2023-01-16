import { Box } from '@chakra-ui/react'

import { CommonText } from '../Common'

export default function About() {
  return (
    <Box>
      <CommonText text="農家や漁師や猟師の人口が著しく減っています。昭和50年から平成30年頃にかけて、農家500万→170万人、漁師50万→15万人、猟師50万→5万人。そして大半が65歳以上という状態です。" />
      <CommonText text="一方で東京一極集中が進み、農家や漁師や猟師の知り合いがいる都市部の人がどんどんいなくなっています。このような状況の中で、一次体験を増やし、関係人口を増やし、食について考える機会を増やすため、2020年にNPO法人MOTTAIが創設されました。" />
    </Box>
  )
}
