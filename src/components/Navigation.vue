<template>
  <nav class="nav">
    <select class="nav__select" v-model="request">
      <option value="planets">Планеты</option>
      <option value="films">Фильмы</option>
      <option value="starships">Звездолёты</option>
      <option value="people">Люди</option>
    </select>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      request: 'planets'
    }
  },
  methods: mapActions(['fetchItems']),
  watch: {
    request(value) {
      this.fetchItems(value);
    }
  },
}
</script>

<style>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto 20px;
}

.nav__select {
  border: 1px solid goldenrod;
  font-size: 18px;
  line-height: 20px;
  outline: none;
}

.nav__select:hover {
  cursor: pointer;
}
</style>
