import DateFormatter from '../components/date-formatter'
import ShowTags from '../components/show-tags'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
})
   {
  const href = "/posts/" + [slug]
  return (
    <div>
      <div className="mb-0.5">
        <DateFormatter dateString={date} />{' '}
      </div>
      <h3 className="text-2xl mb-0.5 font-bold leading-snug">
        <Link href={href}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mt-0.5 mb-2">
        <ShowTags tags={tags} />
      </div>
      
      <p className="mb-6">{excerpt}{'... '}
        <Link href={href}>
            <a className="font-medium hover:underline ">Read more</a>
        </Link>
      </p>
    </div>
  )
}