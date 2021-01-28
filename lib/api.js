import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ALPN_ENABLED } from 'constants'

const postsDirectory = join(process.cwd(), '_posts/')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getTags() {
  const allPosts = getAllPosts([
    'tag'
  ]);
  let tags = [];
  allPosts.forEach((post) => {
    tags = [...tags, ...post.tag];
  });
  const setTags = [...new Set(tags)];
  return setTags.sort();
}

export async function getAssociatedPosts(tag) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ]);
  const associatedPosts = allPosts.filter((data) => data.tag.includes(tag));
  return associatedPosts;
}
