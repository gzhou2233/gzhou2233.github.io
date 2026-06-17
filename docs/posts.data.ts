import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: false,
  transform(raw) {
    return raw
      .filter(p => p.url !== '/posts/')
      .map(p => ({
        text: p.frontmatter.title || p.url.replace('/posts/', '').replace('.html', ''),
        link: p.url
      }))
  }
})
