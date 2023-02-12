import Head from 'next/head'

import {
  ogImage,
  siteDescription,
  siteTitle,
  siteUrl,
} from '../constants/constants'

type Prop = {
  description?: string
  ogUrl?: string
  ogSiteName?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export const CustomHead = (props: Prop) => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={props.description ?? siteDescription} />
      <meta property="og:url" content={props.ogUrl ?? siteUrl} />
      <meta property="og:site_name" content={props.ogSiteName ?? siteTitle} />
      <meta property="og:title" content={props.ogTitle ?? siteTitle} />
      <meta
        property="og:description"
        content={props.ogDescription ?? siteDescription}
      />
      <meta property="og:type" content={'website'} />
      <meta property="og:locale" content={'ja_JP'} />
      <meta property="og:image" content={props.ogImage ?? ogImage} />
      <meta
        property="twitter:title"
        content={props.twitterTitle ?? siteTitle}
      />
      <meta
        property="twitter:description"
        content={props.twitterDescription ?? siteDescription}
      />
      <meta property="twitter:image" content={props.twitterImage ?? ogImage} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
