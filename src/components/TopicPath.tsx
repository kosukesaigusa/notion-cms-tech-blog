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
        <Text as="span" color={'blue.600'}>
          home
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
          <Text as="span" color={'blue.600'}>
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
  return <Box mb={6}>{topicPaths}</Box>
}

/** Returns label from path string. */
const labelByPath = (path: string): string => {
  return (PATH_LABELS.find((e) => e.path === path) ?? { path, label: path })
    .label
}

/** Existing path and labels. */
const PATH_LABELS = [
  {
    path: '',
    label: 'home',
  },
  {
    path: 'posts',
    label: 'posts',
  },
]
