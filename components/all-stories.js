import PostList from '../components/post-list'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'


export default function MoreStories({ posts, h1Info}) {
  return (
    <section>
      <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {h1Info}
      </h1>
      {posts.map((post) => (
        <PostList
          title={post.title}
          date={post.date}
          tag={post.tag}
          slug={post.slug}
        />
      ))}
    </section>
  )
}
