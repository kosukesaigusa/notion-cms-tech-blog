import { Box } from '@chakra-ui/react'

import {
  CommonExternalLinkText,
  CommonListItem,
  CommonText,
  CommonUnorderedList,
} from '../Common'

export default function TrapOwner() {
  return (
    <Box>
      <CommonText text="始まりのきっかけは、環境省「森里川海プロジェクト」の地域循環共生圏の構築に向けたモデル地域として小田原が選ばれたことです。そこから受託研究という形で慶應義塾大学が関わることになり、「小田原森里川海インキュベーション事業”寄気”」と呼ばれる共同研究が始まりました。代表の菅田が、たまたまこの研究に関わることになり、サポートスタッフとして関わっていた罠シェアリングという活動の派生として、小田原で実施したものが「罠オーナー制度」となっています。" />
      <CommonText text="罠オーナー制度については、過去に次のようなメディアに掲載して頂きました。" />
      <CommonUnorderedList>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://news.ntv.co.jp/category/society/440149'}
            text={'日テレNEWS24「罠オーナー制度」その仕組みは？'}
          ></CommonExternalLinkText>
        </CommonListItem>
        <CommonListItem>
          <CommonExternalLinkText
            href={
              'https://www.youtube.com/watch?v=A_PToY31AUg&ab_channel=TBSNEWS'
            }
            text={'TBS DOOO「食」を考えるために猟師になった大学生の挑戦'}
          ></CommonExternalLinkText>
        </CommonListItem>
      </CommonUnorderedList>
    </Box>
  )
}
