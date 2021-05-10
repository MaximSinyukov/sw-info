<template>
  <div id="app" class="app">
    <h1 class="app__title">
      Данные о звёздных войнах из
      <a
        class="app__link"
        href="https://swapi.dev/"
        target="_blank"
      >
        SWAPI
      </a>
    </h1>
    <hr>
    <List
      v-bind:items="planets"
    />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'App',
  data() {
    return {
      planets: [
        {id: 1, title: 'Планета 1', residents: 10, saw: false},
        {id: 2, title: 'Планета 2', residents: 3, saw: false},
        {id: 3, title: 'Планета 3', residents: 5, saw: false},
      ]
    }
  },
  components: {
    List
  }
}
</script>

<style>
.app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__title {
  font-size: 42px;
  line-height: 44px;
}

.app__link {
  text-decoration: none;
  color: gold;
}
</style>
