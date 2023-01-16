import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'

export default function TopicPath() {
  const router = useRouter()
  const currentPath = router.asPath
    .replace(/\/$/, '')
    .replace(/\#.*$/, '')
    .split('/')
    .slice(1)
  const topicPaths = []
  topicPaths.push(
    <Box as="span" key={'/'}>
      <NextLink href={'/'}>
        <Text as="span" color={'teal.600'}>
          ホーム
        </Text>
      </NextLink>
      <Text as="span" px={1} color={'gray.400'}>
        <ChevronRightIcon />
      </Text>
    </Box>
  )
  let previousPath = ''
  for (const path of currentPath) {
    const isFinal = path == currentPath[currentPath.length - 1]
    topicPaths.push(
      <Box as="span" key={path}>
        <NextLink href={`/${previousPath}${path}`}>
          <Text as="span" color={'teal.600'}>
            {labelByPath(`${path}`)}
          </Text>
        </NextLink>
        {!isFinal && (
          <Text as="span" px={1} color={'gray.400'}>
            <ChevronRightIcon />
          </Text>
        )}
      </Box>
    )
    previousPath = `${previousPath}${path}/`
  }
  return <Box mb={4}>{topicPaths}</Box>
}

/** path 名からラベルを取得して返す。 */
const labelByPath = (path: string): string => {
  return (pathLabels.find((e) => e.path === path) ?? { path, label: path })
    .label
}

/** 存在するパスとラベルの一覧。 */
const pathLabels = [
  {
    path: '',
    label: 'ホーム',
  },
  {
    path: 'about',
    label: '私たちについて',
  },
  {
    path: 'activities',
    label: 'MOTTAI の活動',
  },
  {
    path: 'news',
    label: 'ニュース',
  },
  {
    path: 'support',
    label: 'MOTTAI をサポートする',
  },
  {
    path: 'donation',
    label: '寄付でサポートする',
  },
  {
    path: 'pro-bono',
    label: 'メンバーとしてサポートする',
  },
  {
    path: 'request',
    label: '講演依頼などでサポートする',
  },
  {
    path: 'privacy',
    label: 'プライバシーポリシー',
  },
]
