import { Box } from '@chakra-ui/react'

import { CommonText } from '../Common'
import ContactForm from '../ContactForm'

export default function Contact() {
  return (
    <Box>
      <CommonText text="活動内容についてのご不明点・ご意見、会員登録、寄付、各種サポートについてのお問い合わせは、こちらのフォームよりご連絡ください。数営業日以内に折返しご連絡致します。" />
      <ContactForm />
    </Box>
  )
}
