import Link from 'next/link'
import Button from '@material-ui/core/Button';

export default function ShowTags({ tags }) {
    return (
        <span className="text-sm">
            {!Array.isArray(tags) ? (
                <Link key={tags} href={`/tags/${tags}`} as={`/tags/${tags}`} passHref >
                        <Button size="small" color="primary">
                            {tags}
                        </Button>
                </Link>
            ) : (
                tags.map((tag) => (
                    <Link key={tag} href={`/tags/${tag}`} as={`/tags/${tag}`} passHref >
                        <Button size="small" color="primary">
                            {tag}
                        </Button>
                    </Link>
                ))
            )}
        </span>
    )
}

