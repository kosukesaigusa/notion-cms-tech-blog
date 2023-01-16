import { Box } from '@chakra-ui/react'

import { CommonText } from '../Common'
import PublicationGrid from '../PublicationGrid'

export default function Publication() {
  return (
    <Box>
      <CommonText text="今までに次のようなメディアに掲載して頂きました。" />
      <Box pb={8}>
        <PublicationGrid />
      </Box>
    </Box>
  )
}
