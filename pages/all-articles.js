import Container from '../components/container'
import AllStories from '../components/all-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import { Button } from '@material-ui/core';

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  const recentPosts = allPosts.slice(0, 5)
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu's blog</title>
          </Head>
          <div className="max-w-6xl mx-auto mb-12">
          <Header />
          <AllStories posts={allPosts} h1Info='All artcles'/>
          <div className="mt-10 ml-auto">
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
