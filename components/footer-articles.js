import FooterStories from '../components/footer-more-stories'
import { getAllPosts } from '../lib/api'


export default function FooterArtices({ allPosts }) {
  // const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0,5)
  return (
          <div className="max-w-4xl mx-auto mb-12">
            {<FooterStories posts={morePosts}/>}
          </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ])

  return {
    props: { allPosts },
  }
}
