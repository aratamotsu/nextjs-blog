import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
//import ShowTags from '../components/show-tags'

import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}) {
  return (
    <div>
      <h3 className="text-2xl mb-0.5 font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-0.5">
        <DateFormatter dateString={date} />{' '}
        {!Array.isArray(tags) ? (
            <a>{tags}</a>
        ) : (
            tags.map((tag) => (
                <a as={`/categories/${tag}`} href="/categories/[tag]">{tag}</a>
            ))
        )}
      </div>
      
      <p className="text-lg mb-6">{excerpt}{'... '}
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="font-medium hover:underline ">Read more</a>
        </Link>
      </p>
    </div>
  )
}

// //<ShowTags tags={tag} />}