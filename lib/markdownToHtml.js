import math from 'remark-math'
import katex from 'rehype-katex'
import highlight from 'remark-highlight.js'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'


export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(highlight)
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(rehypeStringify)  
    .process(markdown);    
  return result.toString();
}
