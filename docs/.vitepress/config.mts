import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 自动扫描 posts 目录生成侧边栏
function getPosts() {
  const postsDir = join(__dirname, '../../posts')
  try {
    return readdirSync(postsDir)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .map(f => ({
        text: f.replace('.md', ''),
        link: `/posts/${f.replace('.md', '')}`
      }))
  } catch { return [] }
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
