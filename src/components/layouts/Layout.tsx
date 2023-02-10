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
        <title>run-app.dev</title>
        <meta
          name="description"
          content="アプリケーションエンジニアの技術ブログ。Flutter, Dart, Firebase, Django, Python, React, TypeScript, ...。"
        />
        <meta property="og:url" content={'https://www.run-app.dev'} />
        <meta property="og:site_name" content={'run-app.dev | 公式サイト'} />
        <meta property="og:title" content={'run-app.dev'} />
        <meta
          property="og:description"
          content={
            'アプリケーションエンジニアの技術ブログ。Flutter, Dart, Firebase, Django, Python, React, TypeScript, ...。'
          }
        />
        <meta property="og:type" content={'website'} />
        <meta property="og:locale" content={'ja_JP'} />
        <meta property="og:url" content={'https://www.run-app.dev'} />
        <meta
          property="og:image"
          content={'https://www.run-app.dev/images/ogp.png'}
        />
        <meta property="twitter:title" content={'run-app.dev'} />
        <meta
          property="twitter:description"
          content={
            'アプリケーションエンジニアの技術ブログ。Flutter, Dart, Firebase, Django, Python, React, TypeScript, ...。'
          }
        />
        <meta
          property="twitter:image"
          content={'https://www.run-app.dev/images/ogp.png'}
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
