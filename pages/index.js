import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu' blog</title>
          </Head>
          <Header />
          <div className="max-w-3xl mx-auto mb-12">
            {<MoreStories posts={morePosts} />}
          </div>
        </Container>
        <Footer />
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
    'tag'
  ])

  return {
    props: { allPosts },
  }
}
