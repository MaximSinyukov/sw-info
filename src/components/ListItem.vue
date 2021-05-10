<template>
  <li
    class="list__item"
    v-bind:class="{list__item_saw: saw}"
  >
    <input
      class="list__input"
      type="checkbox"
      @click="saw = !saw"
    >
    {{ item.name || item.title }}
  </li>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      saw: false,
    }
  }

}
</script>

<style>
  .list__item {
    display: flex;
    width: 300px;
    justify-content: flex-start;
    padding: 10px 4px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }

  .list__item_saw {
    text-decoration: line-through rgb(22, 214, 22) 2px;
  }

  .list__input {
    margin-right: 20px;
  }
</style>
