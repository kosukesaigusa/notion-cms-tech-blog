import Head from 'next/head'

const title = 'run-app.dev'

const siteUrl = 'https://www.run-app.dev'

const description =
  'アプリケーションエンジニアの技術ブログ。Flutter, Dart, Firebase, Django, Python, React, TypeScript, ...。'

export const CustomHead = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:locale" content={'ja_JP'} />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:image"
        content={'https://www.run-app.dev/images/ogp.png'}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={'https://www.run-app.dev/images/ogp.png'}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
