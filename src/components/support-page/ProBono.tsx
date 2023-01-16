import { Box } from '@chakra-ui/react'

import { CommonListItem, CommonText, CommonUnorderedList } from '../Common'
import ContactForm from '../ContactForm'

export default function ProBono() {
  return (
    <Box>
      <Box mb={4}>
        <CommonText text="NPO法人MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動しています。そして、当たり前と感じがちな「食べる」という行為について考え直すきっかけを作り、食品ロスをはじめとする様々な社会問題について当事者意識を持つことができる社会を目指しています。" />
        <CommonText text="プロボノ・インターンとしてサポートしてみたい方は、" />
        <CommonUnorderedList>
          <CommonListItem>どんなことをやってみたいか？</CommonListItem>
          <CommonListItem>どんなことができるか？</CommonListItem>
          <CommonListItem>どのくらいの頻度で関われるか？</CommonListItem>
        </CommonUnorderedList>
        <CommonText text="を含む内容を、下記のフォームにご入力お願いします。フォームにご入力いただきましたメールアドレスに、数営業日以内に返信致します。" />
      </Box>
      <ContactForm defaultValue={'プロボノやインターンについて'} />
    </Box>
  )
}
