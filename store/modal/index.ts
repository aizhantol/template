import { MutationTree } from 'vuex'

export const state = () => ({
  isOpen: false,
  title: '',
  payload: ''
})

export type ModalStateT = ReturnType<typeof state>

export const mutations: MutationTree<ModalStateT> = {
  show(state, data:any) {
    state.title = data.title
    state.isOpen = true
    state.payload = data.payload
  },
  close(state) {
    state.isOpen = false
    state.title = ''
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
