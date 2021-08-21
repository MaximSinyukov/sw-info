export default {
  state: {
    items: [],
    loading: false,
    section: 'planets',
    currentPage: 1,
    maxPageCount: null,
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
    getMaxPageCount(state) {
      return state.maxPageCount;
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setCurrentPages(state, value) {
      state.currentPage = value;
    },
    setSection(state, value) {
      state.section = value;
    },
    setMaxPageCount(state, value) {
      const maxPage = Math.ceil(value.count / value.results.length);
      state.maxPageCount = maxPage;
    },
  },
  actions: {
    async fetchItems(ctx, section = 'planets') {
      ctx.commit('setLoading');
      ctx.commit('setSection', section);
      ctx.commit('setCurrentPages', 1);

      const res = await fetch(
        `https://swapi.dev/api/${section}/?page=1`
      );
      const items = await res.json();
      const { count, results } = items;

      ctx.commit('setLoading');
      ctx.commit('setItems', results);
      ctx.commit('setMaxPageCount', { count, results })
    },
    async changePage(ctx, newPage) {
      ctx.commit('setLoading');
      ctx.commit('setCurrentPages', newPage);

      const res = await fetch(
        `https://swapi.dev/api/${ctx.state.section}/?page=${newPage}`
      );
      const items = await res.json();

      ctx.commit('setLoading');
      ctx.commit('setItems', items.results);
    },
  },
}
