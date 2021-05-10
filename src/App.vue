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
  </div>
</template>

<script>


export default {
  name: 'App',
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
