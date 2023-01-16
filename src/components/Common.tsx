import { ReactNode } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

type Props = {
  text: string
}

type AProps = {
  href: string
  text: string
}

type ImageProps = {
  src: string
  alt: string
}

type ListProps = {
  children: ReactNode
}

export const CommonH2 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h2'} size={'lg'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonH3 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h3'} size={'lg'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonH4 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h4'} size={'sm'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonText = (props: Props) => {
  return <Text pb={4}>{props.text}</Text>
}

export const CommonImage = (props: ImageProps) => {
  return <Image rounded={'lg'} src={props.src} alt={props.alt} />
}

export const CommonExternalLinkText = (aProps: AProps) => {
  return (
    <Link href={aProps.href} color="teal.500" isExternal pb={4}>
      {aProps.text} <ExternalLinkIcon mx="2px" />
    </Link>
  )
}

export const CommonUnorderedList = (props: ListProps) => {
  return (
    <UnorderedList pl={[2]} pb={4}>
      {props.children}
    </UnorderedList>
  )
}

export const CommonOrderedList = (props: ListProps) => {
  return (
    <OrderedList pl={[2]} pb={4}>
      {props.children}
    </OrderedList>
  )
}

export const CommonListItem = (props: ListProps) => {
  return <ListItem>{props.children}</ListItem>
}
