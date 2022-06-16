import { Plugin, Context } from '@nuxt/types'

const plugin: Plugin = (ctx: Context, inject) => {
  const modal = {
    show(type: string, payload?: object) {
      ctx.store.commit('modal/show', { title: type, data: payload })
      document.documentElement.style.overflow = 'hidden'
    },
    close() {
      ctx.store.commit('modal/close')
      document.documentElement.style.overflow = ''
    },
  }
  inject('modal', modal)
}

export default plugin
