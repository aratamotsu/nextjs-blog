import markdownStyles from './markdown-styles.module.css'
import Link from 'next/link'

export default function PostBody({ content }) {
  return (
    <div className="main-content max-w-4xl mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
