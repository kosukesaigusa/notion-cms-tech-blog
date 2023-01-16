import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react'

import { CommonText } from '../../components/Common'

export default function Corporate() {
  return (
    <Box>
      <CommonText text="NPO法人MOTTAIの法人概要は次の通りです。" />
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td pl={0}>所轄庁</Td>
              <Td pl={0}>神奈川県</Td>
            </Tr>
            <Tr>
              <Td pl={0}>主たる事務所の所在地</Td>
              <Td pl={0}>神奈川県小田原市米神２４７番３</Td>
            </Tr>
            <Tr>
              <Td pl={0}>従たる事務所の所在地</Td>
              <Td pl={0}>－</Td>
            </Tr>
            <Tr>
              <Td pl={0}>代表者氏名</Td>
              <Td pl={0}>菅田 悠介</Td>
            </Tr>
            <Tr>
              <Td pl={0}>定款に記載された目的</Td>
              <Td pl={0}>
                この法人は食料廃棄問題や環境問題に関心が薄い人たちに対して、食育や環境教育に関する事業を行い、様々な人を巻き込みながら食料問題や環境問題の根本的な解決に寄与することを目的とする。
              </Td>
            </Tr>
            <Tr>
              <Td pl={0}>活動分野</Td>
              <Td pl={0}>
                社会教育／まちづくり／農山漁村・中山間地域／環境の保全／子どもの健全育成
              </Td>
            </Tr>
            <Tr>
              <Td pl={0}>法人番号</Td>
              <Td pl={0}>6021005011891</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
