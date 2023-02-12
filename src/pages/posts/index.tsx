import ContentContainer from '../../components/ContentContainer'
import { CustomHead } from '../../components/CustomHead'
import { siteDescription, siteTitle } from '../../constants/constants'

export default function PostArticlePage({ posts }: { posts: Post[] }) {
  return (
    <div>
      <PostsHead />
      <ContentContainer>a</ContentContainer>
    </div>
  )
}

const PostsHead = () => {
  return (
    <CustomHead
      ogSiteName={`記事一覧 | ${siteTitle}`}
      ogTitle={`記事一覧 | ${siteTitle}`}
      ogDescription={`記事一覧 | ${siteDescription}`}
      twitterDescription={`記事一覧 | ${siteDescription}`}
    />
  )
}
