import { MutationTree } from 'vuex'
import { IModal } from 'models/modal'

export const state = () => ({
  modals: [] as IModal[],
})

export type ModalStateT = ReturnType<typeof state>

export const mutations: MutationTree<ModalStateT> = {
  add(state, data: IModal) {
    data.id = 1
    state.modals = [data]
  },
  push(state, data: IModal) {
    data.id = state.modals.length + 1
    state.modals.push(data)
  },
  close(state) {
    state.modals.pop()
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
