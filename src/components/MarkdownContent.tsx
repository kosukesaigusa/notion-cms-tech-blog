import { ReactNode } from 'react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Code,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const MarkdownContent = (props: { content: string }) => {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer(customChakraUIRenderTheme)}
      skipHtml
    >
      {props.content}
    </ReactMarkdown>
  )
}

/** Define custom markdown post UI rendering theme. */
const customChakraUIRenderTheme = {
  // TODO: Stop using any here.
  h2: (props: any) => (
    <Heading mt={6} mb={4} as={'h2'} fontSize={'lg'} {...props} />
  ),
  h3: (props: any) => (
    <Heading mt={6} mb={4} as={'h3'} fontSize={'md'} {...props} />
  ),
  h4: (props: any) => (
    <Heading mt={6} mb={4} as={'h4'} fontSize={'sm'} {...props} />
  ),
  p: (props: any) => <Text pb={4} {...props} />,
  a: (props: any) => (
    <Link href={props.href} color="teal.500" isExternal pb={4}>
      {props.text} <ExternalLinkIcon mx="2px" />
    </Link>
  ),
  ul: (props: any) => (
    <UnorderedList pl={[2]} pb={4}>
      {props.children}
    </UnorderedList>
  ),
  ol: (props: any) => (
    <OrderedList pl={[2]} pb={4}>
      {props.children}
    </OrderedList>
  ),
  li: (props: any) => <ListItem>{props.children}</ListItem>,
  img: (props: any) => <Image rounded={'lg'} src={props.src} alt={props.alt} />,
  code: (props: CodeBlockProps) => {
    return (
      <CodeBlock inline={props.inline} className={props.className}>
        {props.children}
      </CodeBlock>
    )
  },
  hr: (_: any) => {
    return <Divider my={8} />
  },
}

type CodeBlockProps = {
  inline?: boolean
  className?: string
  children: ReactNode & ReactNode[]
}

const CodeBlock = (props: CodeBlockProps) => {
  if (props.inline) {
    return <Code className={props.className}>{props.children}</Code>
  }
  const match = /language-(\w+)/.exec(props.className || '')
  const lang = match && match[1] ? match[1] : ''
  return (
    <SyntaxHighlighter
      style={oneDark}
      language={lang}
      customStyle={{
        borderRadius: 8,
      }}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}
