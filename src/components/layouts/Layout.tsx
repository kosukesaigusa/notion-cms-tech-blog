import { ReactNode } from 'react'

import Head from 'next/head'

import { Box, Flex } from '@chakra-ui/react'

import Footer from './Footer'
import HeaderNavigation from './HeaderNavigation'

/** */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Head>
        <title>NPO法人 MOTTAI</title>
        <meta
          name="description"
          content="MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。"
        />
        <meta property="og:url" content={'https://www.npo-mottai.org'} />
        <meta property="og:site_name" content={'NPO法人 MOTTAI | 公式サイト'} />
        <meta property="og:title" content={'NPO法人 MOTTAI'} />
        <meta
          property="og:description"
          content={
            'MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。'
          }
        />
        <meta property="og:type" content={'website'} />
        <meta property="og:locale" content={'ja_JP'} />
        <meta property="og:url" content={'https://www.npo-mottai.org'} />
        <meta
          property="og:image"
          content={'https://www.npo-mottai.org/images/ogp.png'}
        />
        <meta property="twitter:title" content={'NPO法人 MOTTAI'} />
        <meta
          property="twitter:description"
          content={
            'MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。'
          }
        />
        <meta
          property="twitter:image"
          content={'https://www.npo-mottai.org/images/ogp.png'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
