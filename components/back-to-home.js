// components/Share.tsx
import Link from 'next/link'

export default function BackToHome() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
        <Link href="/">
        <a className="hover:underline">← Back to home</a>
        </Link>
    </div>
  )
}