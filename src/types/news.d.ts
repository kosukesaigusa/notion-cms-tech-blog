// TODO: コメントを書く
/**  */
type NewsSummary = {
  slug: string
  createdAt: string
  title: string
  imageUrl: string
  description: string
}

type NewsArticle = {
  summary: NewsSummary
  content: string
}
