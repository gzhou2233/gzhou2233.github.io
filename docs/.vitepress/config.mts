import { defineConfig } from 'vitepress'
import { readdirSync, watch } from 'fs'
import { resolve } from 'path'

// 缓存文章列表，dev 模式下监听文件变化自动刷新
let _postsCache: { text: string; link: string }[] | null = null
let _watcherReady = false

function getPosts() {
  const postsDir = resolve('docs/posts')
  
  // dev 模式：监听目录变化，自动清缓存
  if (!_watcherReady && process.env.NODE_ENV !== 'production') {
    watch(postsDir, { persistent: false }, () => { _postsCache = null })
    _watcherReady = true
  }
  
  if (_postsCache) return _postsCache
  
  _postsCache = readdirSync(postsDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => ({
      text: f.replace('.md', ''),
      link: `/posts/${f.replace('.md', '')}`
    }))
  
  return _postsCache
}

export default defineConfig({
  title: "吉加的小小站",
  description: "灯光、技术、生活",
  lang: "zh-CN",
  cleanUrls: true,
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: getPosts()
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gzhou2233' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 吉加'
    },

    search: {
      provider: 'local'
    }
  }
})
