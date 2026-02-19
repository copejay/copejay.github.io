import { defineConfig } from 'vitepress'

export default defineConfig({

  head: [
    [
      'script',
      {
        async: '',
        src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      }
    ]
  ],


  title: 'CopeJay个人博客',
  description: 'Game Developer',

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '项目总览', link: '/project/index' },
      { text: '博客文章', link: '/books/index' },
      { text: '关于作者', link: '/about/index' }
    ],

    sidebar: [
      {
        text: '网站导航',
        children: [
          { text: '主页', link: '/' },

          { text: '项目总览', link: '/project/index' },


          { text: '博客文章', link: '/books/index' },
          { text: '关于作者', link: '/about/index' }
        ]
      }
    ]
  }
})
