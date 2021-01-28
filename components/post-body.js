import markdownStyles from './markdown-styles.module.css'
import Link from 'next/link'

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-10">
        <Link href="/">
          <a className="hover:underline">← Back to home</a>
        </Link>
      </div>
    </div>
  )
}
