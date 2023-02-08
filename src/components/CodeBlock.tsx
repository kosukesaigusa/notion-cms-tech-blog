import { ReactNode } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { CommonCode } from './Common'

export type CodeBlockProps = {
  inline?: boolean
  className?: string
  children: ReactNode & ReactNode[]
}

export const CodeBlock = (props: CodeBlockProps) => {
  if (props.inline) {
    return (
      <CommonCode className={props.className ?? ''}>
        {props.children}
      </CommonCode>
    )
  }
  const match = /language-(\w+)/.exec(props.className || '')
  const lang = match && match[1] ? match[1] : ''
  return (
    <SyntaxHighlighter
      style={materialDark}
      language={lang}
      customStyle={{
        borderRadius: 8,
        backgroundColor: '#192638',
      }}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}
