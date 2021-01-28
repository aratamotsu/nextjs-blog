import Link from 'next/link'

export default function ShowTags({ tags }) {
    return (
        <tag className="text-sm">
            {!Array.isArray(tags) ? (
                <Link as={`/tags/${tags}`} href="/tags/[tags]">
                    <a className="px-2 pt-0.5 mr-2 border-solid border-2 border-black rounded-lg">{tags}</a>
                </Link>
            ) : (
                tags.map((tag) => (
                    <Link as={`/tags/${tag}`} href="/tags/[tag]">
                        <a className="px-2 pt-0.5 mr-2 border-solid border-2 border-black rounded-lg">{tag}</a>
                    </Link>
                ))
            )}
        </tag>
    )
}

