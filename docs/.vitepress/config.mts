import { defineConfig } from 'vitepress'

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
          items: [
            { text: 'Ma2主要知识点', link: '/posts/ma2-knowledge' },
            { text: 'Hello World', link: '/posts/hello-world' }
          ]
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
