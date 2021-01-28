import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'
import ShowTags from '../components/show-tags'

export default function PostHeader({ title, date, tag}) {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="mb-2 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>
        <div>
          <ShowTags tags={tag} />
        </div>
      </div>
    </>
  )
}
