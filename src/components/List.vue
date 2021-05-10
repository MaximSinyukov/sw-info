<template>
  <div>
    <ul>
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
