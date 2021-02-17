import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'
import ShowTags from '../components/show-tags'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Link from 'next/link'

export default function PostHeader({ title, date, tag, slug}) {
  const href = "/posts/" + slug
  return (
    <>
      <div className="my-8 max-w-4xl mx-auto">
        <div className="mb-1 text-lg">
          <DateFormatter dateString={date} /> 
        </div>
        <div>
          <Link href={href}>
          <a className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter  leading-snug mb-2 text-left">
            {title}
          </a>
          </Link>
        </div>
        <div>
          <LocalOfferIcon fontSize='small' color='primary'/><ShowTags tags={tag} />
        </div>
      </div>
    </>
  )
}
