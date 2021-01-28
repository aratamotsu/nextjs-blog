import Link from 'next/link'

export default function FooterPreview({
  title,
  slug,
}) {
  return (
    <div className="mb-5 font-bold leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
    </div>
  )
}
