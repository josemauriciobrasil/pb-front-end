import { createStore } from 'vuex'

export default createStore({
  state: {
  },

  getters: {

    getFornecedor: state => state.fornecedores,

  },
  mutations: {

    ADD_FORNECEDOR(state, fornecedor) {
      state.fornecedores = [{ content: fornecedor, done: false }, ...state.fornecedores];
    },
    REMOVE_FORNECEDOR(state, fornecedor) {
      state.fornecedores.splice(state.fornecedores.indexOf(fornecedor), 1);
    },
    EDIT_FORNECEDOR(state, fornecedor) {
      state.fornecedor.done = fornecedor.done;
  },
  actions: {

    commitFornecedor: ({commit}, newFornecedor) => commit('ADD_FORNECEDOR', a)
  },

  modules: {
  }
})
