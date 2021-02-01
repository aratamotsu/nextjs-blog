import Link from 'next/link'

export default function ShowTags({ tags }) {
    return (
        <div className="text-sm">
            {!Array.isArray(tags) ? (
                <Link as={`/tags/${tags}`} href="/tags/[tags]">
                    <a className="px-2 pt-0.5 mr-2 border-solid border border-black hover:bg-gray-200 rounded-md">{tags}</a>
                </Link>
            ) : (
                tags.map((tag) => (
                    <Link key={tag} as={`/tags/${tag}`} href="/tags/[tag]">
                        <a className="px-2 pt-0.5 mr-2 border-solid border border-black hover:bg-gray-200 rounded-md">{tag}</a>
                    </Link>
                ))
            )}
        </div>
    )
}

