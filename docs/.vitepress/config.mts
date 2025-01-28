import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scalable Solutions: Test Assignment",
  description: "Made with <3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tasks', link: '/tasks/task1.md' },
      { text: 'Author&#39;s Note', link: '/note.md' }
    ],

    sidebar: [
      {
        text: 'Tasks',
        items: [
          { text: 'Task 1', link: '/tasks/task1.md' },
          { text: 'Task 2', link: '/tasks/task2.md' },
          { text: 'Task 3', link: '/tasks/task3.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
