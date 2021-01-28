import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0, 10)
  const recentPosts = allPosts.slice(0, 5)
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu' blog</title>
          </Head>
          <Header />
          <div className="max-w-4xl mx-auto mb-12">
            <MoreStories posts={morePosts} h1Info='Articles'/>
          <div className="hover:underline mt-10 ml-auto">
            <Link href="archive/2">
              <a>Archive</a>
            </Link>
          </div>
          </div>
          
        </Container>
        <Footer recentPosts={recentPosts}/>
      </Layout>
    </>
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
    'tag',
  ])

  return {
    props: { allPosts },
  }
}
