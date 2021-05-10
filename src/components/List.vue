<template>
  <div>
    <Navigation />
    <h2>Я видел</h2>
    <ul class="list">
      <Loader v-if="getLoading" />
      <ListItem
        v-else
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
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'

export default {
  computed: mapGetters(['allItems', 'getLoading']),
  methods: mapActions(['fetchItems']),
  async mounted() {
    this.fetchItems();
  },
  components: {
    ListItem, Loader, Navigation
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
