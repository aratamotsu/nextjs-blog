import Layout from "../components/layout";
import { getTags } from "../lib/api";
import Header from '../components/header'
import Container from '../components/container'
import Head from "next/head";
import ShowTags from '../components/show-tags'

export async function getStaticProps() {
  const allTags = getTags();
  return {
    props: {
      allTags,
    },
  };
}

export default function Tags({ allTags }) {
    return (
      <>
        <Layout>
          <Container>
            <Head>
              <title>Aratamotsu' blog</title>
            </Head>
            <Header />  
            <div className="max-w-4xl mx-auto mb-12">
                <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                    Tags
                </h1>
                <div className="my-1">
                    <ShowTags tags={allTags} />
                </div>
            </div>
          </Container>
        </Layout>
      </>
    )
  }
/*
export default function Tags({allTags}) {
    return (
      <Layout>
        <Head>
          <title>Aratamotsu's Blog</title>
        </Head>
        <section>
          <h2>Tags</h2>
          <ul>
            {allTags.map((tag) => (
              <li key={tag}>
                <Link href={`/tags/${encodeURIComponent(tag)}`}>
                  <a>{tag}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
}*/