import { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { CustomHead } from '../CustomHead'
import Footer from './Footer'
import HeaderNavigation from './HeaderNavigation'

/** */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <CustomHead />
      <Flex minH={'100vh'} flexDirection={'column'}>
        <HeaderNavigation />
        <Box flexGrow={1} mb={20}>
          <main>{children}</main>
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
