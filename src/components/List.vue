<template>
  <div>
    <ul class="list">
      <ListItem
        v-for="item of allItems"
        :key="item.created"
        v-bind:item="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListItem from '@/components/ListItem'

export default {
  computed: mapGetters(['allItems']),
  methods: mapActions(['fetchItems']),
  async mounted() {
    this.fetchItems();
  },
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
