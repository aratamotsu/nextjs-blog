import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Footer from '../../components/footer'
import Share from '../../components/sns-share'
import BackToHome from '../../components/back-to-home'

export default function Post({ post, recentPosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const url = "https://aratamotsu.com/posts/" + post.slug
  return (
    <Layout >
      <Container >
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Aratamotsu's blog
                </title>
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                tag={post.tag}
              />           
              <PostBody content={post.content} />
              <Share url={url} text={post.title}/>
              <BackToHome />
            </article>
          </>
        )}

      </Container>
      <Footer recentPosts={recentPosts}/>
    </Layout>

  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tag'
  ])
  
  const content = await markdownToHtml(post.content || '')

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ]);
  const recentPosts = allPosts.slice(0,5)

  return {
    props: {
      recentPosts,
      post: {
        ...post,
        content,        
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
