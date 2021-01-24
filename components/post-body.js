import markdownStyles from './markdown-styles.module.css'
import Link from 'next/link'

export default function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>


  )
}
