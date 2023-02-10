import { ReactNode } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Code,
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

type CodeProps = {
  className: string
  children: ReactNode
}

export const CommonH2 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h2'} fontSize={'lg'}>
      {props.text}
    </Heading>
  )
}

export const CommonH3 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h3'} fontSize={'md'}>
      {props.text}
    </Heading>
  )
}

export const CommonH4 = (props: Props) => {
  return (
    <Heading mt={6} mb={4} as={'h4'} fontSize={'sm'}>
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

export const CommonCode = (props: CodeProps) => {
  return <Code className={props.className}>{props.children}</Code>
}
