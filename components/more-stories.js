import PostPreview from '../components/post-preview'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'


export default function MoreStories({ posts, h1Info}) {
  return (
    <section>
      <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {h1Info}
      </h1>
      <Grid container spacing={3}>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tag}
        />
      ))}
      </Grid>
    </section>
  )
}
