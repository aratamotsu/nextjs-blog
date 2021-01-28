import Layout from "../../components/layout"
import Container from "../../components/container"
import Header from "../../components/header"
import Head from 'next/head'
import MoreStories from "../../components/more-stories"
import nextPrev from "../../components/next-prev"
import { getAllPosts } from '../../lib/api'


import Pager from "../../components/pager"

const COUNT_PER_PAGE = 10

export default function Index({ selectedPosts, page, total, perPage }) {
  // const heroPost = allPosts[0]
  
  const morePosts = selectedPosts
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu' blog</title>
          </Head>
          <Header />
          <div className="max-w-4xl mx-auto mb-12">
            <MoreStories posts={morePosts} h1Info="Archive Page: "/>
          </div>
          <Pager
            page={page} total={total} perPage={perPage}
            href="/archive/[page]"
            asCallback={(page) => `/archive/${page}`}
          />
        </Container>
      </Layout>
    </>
  )
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ]);
  const selectedPosts = posts.slice(start, end)
  const total = posts.length
  const perPage = COUNT_PER_PAGE

  return {
    props: {
      selectedPosts,
      page,
      total,
      perPage,
    }
  }
}
/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ])
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))
  return { paths: paths, fallback: false }
}
/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}