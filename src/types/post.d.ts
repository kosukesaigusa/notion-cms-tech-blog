type PostMetadata = {
  pageId: string
  slug: string
  createdAt: string
  title: string
  tags: string[]
  description: string
  isDraft: boolean
}

type Post = {
  metadata: PostMetadata
  content: string
}
