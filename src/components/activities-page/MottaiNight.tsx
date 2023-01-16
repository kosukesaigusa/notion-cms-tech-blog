import { Box, Grid, GridItem } from '@chakra-ui/react'

import {
  CommonExternalLinkText,
  CommonImage,
  CommonListItem,
  CommonText,
  CommonUnorderedList,
} from '../Common'

export default function MottaiNight() {
  return (
    <Box>
      <CommonText text="「モッタイNight」とは、ある女子大生が2014年ごろから始めた「もったいないの精神で地球にちょこっと恩返し」をコンセプトに行われる活動でした。そこでは、お店で出るような廃棄になりそうな食材を使った料理会をしたり、みんなで食べ物を持ち寄って料理をしたりしていました。2016年にその活動を知った食料廃棄問題に興味を持っていた菅田は、その精神と名前を受け継ぎ、大学の近くで始めたのが「モッタイNight in藤沢」です。「モッタイNight in 藤沢」では、カレーや鍋などあらかじめ決められた料理について主催者がルウや鍋の素を持ってきて、参加者が具材を持ってくる、というスタイルで行われ、計30回近く行われました。" />
      <CommonText text="それがきっかけとなり、府中・国際基督教大学 (ICU)・多摩など様々な地域において開催されるようになっています。現在も、他の地域へ「モッタイNight」を広げるべく活動をしているので、「参加してみたい！」「ここで開いてみたい！」「ここの施設使ってもいいよ or おすすめです！」などあれば、お気軽にお問い合わせください。" />
      <CommonText text="モッタイNightについては、過去に次のようなメディアに掲載して頂きました。" />
      <CommonUnorderedList>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://neutmagazine.com/yururevolution-yusuke-sugata'}
            text={'NEWT “余り物”に注目して開始した「モッタイナイト」'}
          ></CommonExternalLinkText>
        </CommonListItem>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://www.townnews.co.jp/0601/2017/06/30/388794.html'}
            text={'NEWT “タウンニュース藤沢版 食べ残しで交流'}
          ></CommonExternalLinkText>
        </CommonListItem>
      </CommonUnorderedList>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[6]}
      >
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/mottai-night-1.webp'}
              alt={'mottai-night-1'}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/mottai-night-2.webp'}
              alt={'mottai-night-2'}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/mottai-night-3.webp'}
              alt={'mottai-night-3'}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
