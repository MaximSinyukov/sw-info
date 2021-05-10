<template>
  <li class="list__item">
    <span v-bind:class="{list__item_saw: item.saw}">
      <input
        class="list__input"
        type="checkbox"
        @click="item.saw = !item.saw"
      >
      <strong>{{ item.id }}.</strong>
      {{ item.title }}
    </span>
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
    justify-content: center;
    padding: 10px 4px;
    margin-bottom: 10px;
    border: 1px solid #ccc
  }

  .list__item_saw {
    text-decoration: line-through rgb(22, 214, 22) 2px;
  }

  .list__input {
    margin-right: 20px;
  }
</style>
