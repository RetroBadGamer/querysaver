<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addQuery from './components/addQuery.vue'
import showQuerys from './components/showQuerys.vue'
import header from './components/header.vue'

export default {

  components: {
    'add-query': addQuery,
    'show-querys' : showQuerys,
    'app-header': header
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
