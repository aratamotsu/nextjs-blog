import Link from '../next/link'

export default function ShowTags({ tags }) {
    return (
        <div>
        {!Array.isArray(tags) ? (
            <a as={`/categories/${tag}`} href="/categories/[tag]">{tags}</a>
        ) : (
            tags.map((tag) => (
                <a as={`/categories/${tag}`} href="/categories/[tag]">{tag}</a>
            ))
        )}
        </div>
    )
}

