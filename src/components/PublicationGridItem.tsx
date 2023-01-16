import { Box, GridItem, Heading, Image, Link } from '@chakra-ui/react'

type PublicationItem = {
  title: string
  imageUrl: string
  href: string
}

export default function PublicationGridItem(publicationItem: PublicationItem) {
  return (
    <GridItem key={publicationItem.title}>
      <Box width="full">
        <Heading as="h3" mb="3" fontSize="md" fontWeight="normal" noOfLines={1}>
          {publicationItem.title}
        </Heading>
        <Link href={publicationItem.href} color="teal.500" isExternal pb={4}>
          <Image
            objectFit="cover"
            rounded="lg"
            src={publicationItem.imageUrl}
            alt={publicationItem.title}
          />
        </Link>
      </Box>
    </GridItem>
  )
}
