export default {
  actions: {
    async fetchItems(ctx, section = 'planets', page = 1) {
      ctx.commit('updateLoading')
      const res = await fetch(
        `https://swapi.dev/api/${section}/?page=${page}`
      )
      const items = await res.json()
      ctx.commit('updateLoading')
      ctx.commit('updateItems', items.results)
    }
  },
  mutations: {
    updateItems(state, items) {
      state.items = items
    },
    updateLoading(state) {
      state.loading = !state.loading
    }
  },
  state: {
    items: [],
    loading: false
  },
  getters: {
    allItems(state) {
      return state.items
    },
    getLoading(state) {
      return state.loading
    }
  },
}
