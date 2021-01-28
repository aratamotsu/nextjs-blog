import Layout, { siteTitle } from "../../components/layout";
import { getTags, getAssociatedPosts, getAllPosts } from "../../lib/api";
import Head from "next/head";
import Link from "next/link";
import DateFormatter from '../../components/date-formatter'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'


export default function TagsPosts({ postData, tag, recentPosts }) {
  // const heroPost = allPosts[0]
  const morePosts = postData
  const h1 = 'Tag: ' + `${tag}`
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu' blog</title>
          </Head>
          <Header />
          <div className="max-w-4xl mx-auto mb-12">
            {<MoreStories posts={morePosts} h1Info={h1}/>}
          </div>
        </Container>
        <Footer recentPosts={recentPosts}/>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getTags().map((tags) => {
    return `/tags/${tags}`;
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = params.tags;
  const postData = await getAssociatedPosts(tag);
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
      postData,
      tag,
      recentPosts,
    },
  };
}