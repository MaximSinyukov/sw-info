export default {
  state: {
    items: [],
    loading: false,
    currentPage: 1,
  },
  getters: {
    allItems(state) {
      return state.items;
    },
    getLoading(state) {
      return state.loading;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },
    updateLoading(state) {
      state.loading = !state.loading;
    },
    updatePages(state, value) {
      state.currentPage = value;
    },
  },
  actions: {
    async fetchItems(ctx, section = 'planets', page = 1) {
      ctx.commit('updateLoading');

      const res = await fetch(
        `https://swapi.dev/api/${section}/?page=${page}`
      );
      const items = await res.json();

      ctx.commit('updateLoading');
      ctx.commit('updateItems', items.results);
      console.log(items.next);
      console.log(typeof items.next);
    },
    async changePage(ctx, direction) {
      ctx.commit('updateLoading');
      const items = await res.json();

      ctx.commit('updateLoading');
      ctx.commit('updateItems', items.results);
    },
  },
}
