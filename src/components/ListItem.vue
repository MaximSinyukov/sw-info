<template>
  <li class="list__item">
    <span v-bind:class="{list__item_visited: item.visited}">
      <input
        class="list__input"
        type="checkbox"
        @click="item.visited = !item.visited"
      >
      <strong>{{ item.id }}.</strong>
      {{ item.title }}
    </span>
    <button class="list__button">&otimes;</button>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
  .list__item {
    display: flex;
    justify-content: space-between;
    padding: 10px 4px;
    margin-bottom: 10px;
    border: 1px solid #ccc
  }

  .list__item_visited {
    text-decoration: line-through rgb(22, 214, 22);
  }

  .list__input {
    margin-right: 20px;
  }

  .list__button {
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
