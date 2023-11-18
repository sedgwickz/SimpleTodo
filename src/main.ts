import '@unocss/reset/normalize.css'
import '@/styles/global.scss'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { createApp } from 'vue'
import App from './App.vue'
import GithubBadge from '@/components/github-badge/github-badge.vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

// import.meta.env.DEV && new VConsole();

useRegisterSW()
const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  console.log('init store')
  // try {
  //   store.books.value = JSON.parse(
  //     localStorage.getItem('simple-todo-list') || '[]'
  //   )
  //   if (!store.books.value?.length) {
  //     store.addBook()
  //   }
  // } catch (error) {
  //   store.books.value = []
  // }

  store.$onAction((action) => {
    console.log('update action')
  })

  store.$subscribe((subscribe) => {
    console.log('subscribe: ', subscribe)
    // localStorage.setItem('simple-todo-list', JSON.stringify(store.books.value))
  })
})
app.use(pinia)
app.use(ToastPlugin)

app.component('GithubBadge', GithubBadge)

app.mount('#app')
