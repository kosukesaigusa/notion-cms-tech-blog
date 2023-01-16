import NextLink from 'next/link'

import { Button } from '@chakra-ui/react'

type Props = {
  text: string
  href: string
}

export default function SecondaryLinkButton(props: Props) {
  return (
    <NextLink href={props.href} passHref>
      <Button colorScheme="gray" variant="outline">
        {props.text}
      </Button>
    </NextLink>
  )
}
