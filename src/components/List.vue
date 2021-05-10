<template>
  <div>
    <ul class="list">
      <ListItem
        v-for="item of items"
        :key="item.id"
        v-bind:item="item"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  props: ['items'],
  components: {
    ListItem
  }
}
</script>

<style>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
