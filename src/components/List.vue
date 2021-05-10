<template>
  <div>
    <select v-model="request">
      <option value="planets">Планеты</option>
      <option value="films">Фильмы</option>
      <option value="starships">Звездолёты</option>
      <option value="people">Люди</option>
    </select>
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

export default {
  data() {
    return {
      request: 'planets'
    }
  },
  computed: mapGetters(['allItems', 'getLoading']),
  methods: mapActions(['fetchItems']),
  async mounted() {
    this.fetchItems();
  },
  watch: {
    request(value) {
      this.fetchItems(value);
    }
  },
  components: {
    ListItem, Loader
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
