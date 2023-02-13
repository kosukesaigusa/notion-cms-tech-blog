import { Box, Divider, Heading, Link, Tag, Text } from '@chakra-ui/react'

export const Posts = ({ postMetadata }: { postMetadata: PostMetadata[] }) => {
  return (
    <>
      {postMetadata.map((metadata, index) => (
        <Box key={metadata.pageId}>
          <Box>
            <Text fontSize={'xs'} color={'gray.600'}>
              {metadata.createdAt}
            </Text>
            <Heading fontSize={'lg'} mb={1}>
              <Link href={`posts/${metadata.slug}`}>{metadata.title}</Link>
            </Heading>
            <Text fontSize={'sm'} color={'gray.600'} mb={2}>
              {metadata.description}
            </Text>
            {metadata.tags.map((tag) => (
              <Tag key={tag} mr={2} mb={2} colorScheme={'blue'}>
                {tag}
              </Tag>
            ))}
            {index !== postMetadata.length - 1 && <Divider my={2} />}
          </Box>
        </Box>
      ))}
    </>
  )
}
