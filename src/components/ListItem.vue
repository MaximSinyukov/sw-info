<template>
  <li class="app__list-item">
    <span>
      <input class="app__list-input" type="checkbox">
      <strong>{{ item.id }} </strong>
      {{ item.title }}
    </span>
    <button class="app__list-button">&otimes;</button>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
  .app__list-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 4px;
    margin-bottom: 10px;
    border: 1px solid #ccc
  }

  .app__list-item_visited {
    text-decoration: line-through rgb(22, 214, 22);
  }

  .app__list-input {
    margin-right: 20px;
  }

  .app__list-button {
    width: 30px;
    height: 30px;
    text-align: left;
    background: grey;
    color: rgb(22, 214, 22);
    border-radius: 50%;
    font-weight: bold;
    border: 0;
  }
</style>
