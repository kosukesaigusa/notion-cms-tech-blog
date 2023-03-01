import { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import Footer from './Footer'
import HeaderNavigation from './HeaderNavigation'

/** Gives site layout. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex minH={'100vh'} flexDirection={'column'}>
      <HeaderNavigation />
      <Box flexGrow={1} mb={20}>
        <main>{children}</main>
      </Box>
      <Footer />
    </Flex>
  )
}
