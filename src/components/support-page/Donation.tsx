import {
  Box,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react'

import { CommonExternalLinkText, CommonText } from '../Common'
import ContactForm from '../ContactForm'

export default function Donation() {
  return (
    <Box>
      <CommonText text="NPO法人MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動しています。" />
      <CommonText text="そして、当たり前と感じがちな「食べる」という行為について考え直すきっかけを作り、食品ロスをはじめとする様々な社会問題について当事者意識を持つことができる社会を目指しています。" />
      <CommonText text="寄付をしてくださる方は、クレジットカードでの寄付、または下記口座へのお振込の後、下記のフォームにご入力ください。フォームにご入力いただきましたメールアドレスにお礼のご挨拶をさせていただきます。" />
      <Divider my={8} />
      <CommonText text="クレジットカードでの寄付は、下記 URL の Syncable へお進みください。" />
      <CommonExternalLinkText
        href="https://syncable.biz/associate/npomottai/donate/"
        text="Syncable"
      />
      <CommonText text="銀行振り込みによる寄付は、下記の口座へお振込みください。" />
      <TableContainer mb={12}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td pl={0}>金融機関名</Td>
              <Td pl={0}>ＰａｙＰａｙ銀行</Td>
            </Tr>
            <Tr>
              <Td pl={0}>支店名（店番号）</Td>
              <Td pl={0}>ビジネス営業部（００５）</Td>
            </Tr>
            <Tr>
              <Td pl={0}>預金種目</Td>
              <Td pl={0}>普通預金</Td>
            </Tr>
            <Tr>
              <Td pl={0}>口座番号</Td>
              <Td pl={0}>４９９９６２１</Td>
            </Tr>
            <Tr>
              <Td pl={0}>口座名義人（フリガナ） </Td>
              <Td pl={0}>NPO法人MOTTAI（エヌピーオーホウジンモッタイ</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <ContactForm defaultValue={'寄付について'} />
    </Box>
  )
}
