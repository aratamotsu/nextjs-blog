import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function About() {
  // const heroPost = allPosts[0]
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Aratamotsu's blog</title>
          </Head>
          <Header />
          <div className="my-8 max-w-6xl mx-auto">
          <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          About
          </h1> 
          </div>
          <div className="main-content max-w-6xl mx-auto mb-12">
          <h2>自己紹介</h2>
            <p>物理の研究（量子情報）をやっていました。2018年に命からがら博士号を取得した後は、大きく舵を切って事務系の総合職として働いて3年が経過したところです。最近の機械学習やらデータサイエンスやらのブームに血が騒ぎ、元物理屋としての強みを生かすべく勉強中。<span className="line-through">転職したい</span>
            </p>
            
          <h2>このブログについて</h2>
            <p>
              文章を書く習慣をつけるための場所で、自分のために書いています。主に
              <ul>
                <li>競プロ系</li>
                <li>計量経済学・機械学習で勉強したこと</li>
                <li>読んだ本</li>
                <li>日々考えていること</li>
              </ul>
              などを書いていくつもりです。
            </p>

            <p>なお、このブログはNext.js+Vercelで運用されています。作り始めて1か月でおおよそ基本的な部分については、揃えることができました。基本的にブログとして扱って、記事を書いていくことを想定しています。ソースは<a href="https://github.com/aratamotsu/nextjs-blog">ここ</a>にあります。コードは汚いですが、参考になれば嬉しいです。</p>

            <p>記事の一覧は、<a href="/all-articles">ここから</a>も見ることができます。</p>
            

            <h2>その他の生息場所</h2>
            あまり活発ではないですが、これらの場所にもいますので、気が向いたら絡んでください。
            <ul className="text-black">
              <li><a href="https://twitter.com/Aratamotsu"><TwitterIcon fontSize='small'/> Twitter</a></li>
              <li><a href="https://github.com/aratamotsu"><GitHubIcon fontSize='small'/> GitHub</a></li>
              <li><a href="https://atcoder.jp/users/aratamotsu">AtCoder</a></li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}