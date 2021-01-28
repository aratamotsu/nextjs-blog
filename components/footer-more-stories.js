import FooterPreview from '../components/footer-post-preview'

export default function FooterStories({ posts }) {
  return (
    <section>
      <div className="md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 ">
        {posts.map((post) => (
          <FooterPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}
