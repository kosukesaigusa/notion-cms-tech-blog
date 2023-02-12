import ContentContainer from '../../components/ContentContainer'
import {
  CustomHead,
  siteDescription,
  siteTitle,
} from '../../components/CustomHead'

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
