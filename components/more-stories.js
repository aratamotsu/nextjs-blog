import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, h1Info}) {
  return (
    <section>
      <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {h1Info}
      </h1>
      <div className="md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 ">
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
      </div>
    </section>
  )
}
