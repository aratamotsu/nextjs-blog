import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'

export default function About() {
  // const heroPost = allPosts[0]
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu' blog</title>
          </Head>
          <Header />
          <div className="max-w-4xl mx-auto mb-12">
            ここに自己紹介でも書きます。
          </div>
        </Container>
      </Layout>
    </>
  )
}