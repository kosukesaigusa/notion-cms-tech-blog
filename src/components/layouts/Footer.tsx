import { ReactNode } from 'react'

import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>NPO法人MOTTAI</ListHeader>
            <Link href={'/about'}>私たちについて</Link>
            <Link href={'/activities'}>MOTTAI の活動</Link>
            <Link href={'/news'}>ニュース</Link>
            <Link href={'/support'}>サポートする</Link>
            <Link href={'/#contact'}>お問い合わせ</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>法的事項</ListHeader>
            <Link href={'/privacy'}>プライバシーポリシー</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text fontSize={'sm'}>
            ©2020– NPO法人 MOTTAI
            <br />
            神奈川県小田原市２４７番３
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Facebook'}
              href={'https://www.facebook.com/NPOMOTTAI/'}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/MottaiNpo'}
            >
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
