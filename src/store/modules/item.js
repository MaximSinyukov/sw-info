export default {
  actions: {
    async fetchItems(ctx, page = 1) {
      const res = await fetch(
        'https://swapi.dev/api/planets/?page=' + page
      )
      const items = await res.json()
      ctx.commit('updateItems', items.results)
    }
  },
  mutations: {
    updateItems(state, items) {
      state.items = items
    }
  },
  state: {
    items: []
  },
  getters: {
    allItems(state) {
      return state.items
    }
  },
}
