<template>
  <nav class="nav">
    <select class="nav__select" v-model="request">
      <option value="planets">Планеты</option>
      <option value="films">Фильмы</option>
      <option value="starships">Звездолёты</option>
      <option value="people">Люди</option>
    </select>

    <div class="nav__pages">
      <button
      class="nav__button"
      type="button"
      @click="changePages('prev')">
        &#9668;
      </button>

      <h2 class="nav__num-page">
        {{ getCurrentPage }}
      </h2>

      <button
      class="nav__button"
      type="button"
      @click="changePages('next')">
        &#9658;
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      request: 'planets'
    }
  },
  methods: {
    changePages(direction) {
      this.changePage(direction)
    },
  },
  computed: {
    getCurrentPage() {
      return this.$store.getters.getCurrentPage;
    },
  },
  watch: {
    request(value) {
      this.fetchItems(value)
    }
  },
}
</script>

<style>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin: 20px auto 20px;
}

.nav__select {
  border: 1px solid goldenrod;
  font-size: 18px;
  line-height: 20px;
  outline: none;
  margin: 0 10px 0 10px;
}

.nav__select:hover {
  cursor: pointer;
}

.nav__pages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 24px;
  margin: 19px 0 0;
}

.nav__num-page {
  font-size: 22px;
  line-height: 24px;
  margin: 0 10px;
}

.nav__button:hover {
  cursor: pointer;
}
</style>
