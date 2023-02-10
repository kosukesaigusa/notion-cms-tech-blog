import NextLink from 'next/link'

import { Box, Text, useColorModeValue } from '@chakra-ui/react'

export default function HeaderNavigation() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 4 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <NextLink href={'/'}>
        <Text>run-app.dev</Text>
      </NextLink>
    </Box>
  )
}
