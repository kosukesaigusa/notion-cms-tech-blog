import { ReactNode } from 'react'

import { Box, Center, Heading } from '@chakra-ui/react'

import PrimaryLinkButton from '../buttons/PrimaryLinkButton'

type Props = {
  id: string
  title: string
  children: ReactNode
  detailButton?: DetailButton
}

type DetailButton = {
  text: string
  href: string
}

export default function SectionContainer(props: Props) {
  return (
    <Box mb={12} id={props.id}>
      <Heading mt={6} mb={4} color="orange.500">
        {props.title}
      </Heading>
      <Box>{props.children}</Box>
      {props.detailButton !== undefined && (
        <Center>
          <PrimaryLinkButton
            text={props.detailButton.text}
            href={props.detailButton.href}
          />
        </Center>
      )}
    </Box>
  )
}
