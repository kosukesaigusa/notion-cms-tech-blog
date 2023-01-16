import NextLink from 'next/link'

import { Button } from '@chakra-ui/react'

type Props = {
  text: string
  href: string
}

export default function PrimaryLinkButton(props: Props) {
  return (
    // TODO: passHref の意味を調べる
    <NextLink href={props.href} passHref>
      <Button colorScheme={'orange'} variant="outline">
        {props.text}
      </Button>
    </NextLink>
  )
}
