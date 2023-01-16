import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Circle,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'

import { CommonText } from '../../components/Common'

export default function Message() {
  return (
    <Box>
      <FirstParagraph />
      <CommonText text="そして「なぜ、こんなにも食に関わる思想は分断されてしまうのか？」「なぜ、分断を受け入れ、お互いを認め合って、意見を交換することができないのか？」「なぜ、このような炎上が生まれてしまうのか？」と疑問を抱くようになりました。" />
      <CommonText text="気になった私は、すぐにそのブログの筆者に実際に会いに行って話を聞くことに決めました。その後、実際に鴨の解体を体験したことで、「こうやって動物が殺され、自分の命となっているのか」と衝撃を受けました。その結果、食べ残しを一切しないようになり、それと同時に、食べ残しがあまりにも多く行われている社会の現状に怒りや疑問を覚え、食べ残しの問題を解決したいという思いで、食に関する活動を開始しました。" />
      <CommonText text="現代社会においては、命が食べ物になるまでの過程を体験するような「食の一次情報」に実際に触れて「食の当たり前」について考え直すきっかけを得ることが難しくなってしまっています。私たちNPO法人MOTTAIでは、皆さんがそのような体験を行う場を創り出し、そのような「当たり前の裏側」にアクセスしやすい社会を創るために活動しています。ひとりひとりが食品ロスをはじめとする社会問題に対して、当事者意識を持って過ごせる世の中を目指して、皆さんの普段の生活に新たな視点を届けて行きたいと考えています。" />
      <CommonText
        text="
「食べる」といういつもの行為から、様々な社会問題が見えてきて、社会が良くなっていく。そんなことを願っています。"
      />
      <RepresentativeProfile />
    </Box>
  )
}

const FirstParagraph = () => {
  return (
    <Text pb={4}>
      NPO法人MOTTAIの設立やその活動の原点となっているのは、私が受験生の時に見た、ある狩猟に関するブログ
      <Link
        href={'https://www.facebook.com/chiharunomori/'}
        color="teal.500"
        px={2}
        isExternal
      >
        ちはるの森
        <ExternalLinkIcon mx="2px" />
      </Link>
      です。ある記事のコメント欄は、いわゆる「炎上」している状態でした。コメントを書き込む人々が、それぞれ自分の考えが一番正しいと思って皆で言い争っている様子に圧倒され、徹夜で読み込みました。
    </Text>
  )
}

const RepresentativeProfile = () => {
  return (
    <Box>
      <Circle mb={4}>
        <Box boxSize={'xs'}>
          <Image
            rounded={'full'}
            src={'/images/sugata-yusuke.webp'}
            alt={'菅田悠介'}
          />
        </Box>
      </Circle>
      <Center>
        <Box maxW={'lg'}>
          <CommonText text="NPO法人MOTTAI代表理事 菅田悠介" />
        </Box>
      </Center>
      <Center>
        <Box maxW={'lg'}>
          <CommonText text="1995年生まれ・福岡県出身。慶應義塾大学環境情報学部卒。わな猟師。インフラ企業社員。小田原市米神にて古民家シェアハウスを運営。鴨の解体から食料廃棄問題（食品ロス）に興味を持ち始め、食べるを考えるきっかけづくりを始めるようになる。廃棄になりそうな食材を持ち寄る料理会「モッタイNight!!」や狩猟体験事業「罠オーナー制度」などを手がけている。" />
        </Box>
      </Center>
    </Box>
  )
}
