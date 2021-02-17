import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import PostTitle from '../components/post-title'


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
          <div className="max-w-4xl mx-auto">
            <PostTitle>About</PostTitle>
          </div>
          <div className="main-content max-w-4xl mx-auto mb-12">
          <h2>自己紹介</h2>

          <h2>このブログについて</h2>
            <p>
              文章を書く習慣をつけるための場所で、自分のために書いています。おそらくは
              <ul>
                <li>競プロ系</li>
                <li>計量経済学・機械学習で勉強したこと</li>
                <li>読んだ本</li>
                <li>日々考えていること</li>
              </ul>
              などを書いていくつもりです。
            </p>

            <p>このブログはNext.js+Verselで運用されています。基本的にブログとして記事をどんどん書いていくことしかしないつもりです。ソースは<a href="">ここ</a>にあります。</p>
            

            <h2>その他の生息場所</h2>
            <ul>
                <li>Twitter</li>
                <li>AtCoder</li>
                <li>Github</li>
                <li>ブクログ</li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}