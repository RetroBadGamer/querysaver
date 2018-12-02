<template>
    <v-app>
      <app-nav></app-nav>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
</template>

<script>
import nav from '@/components/nav'
import showQuerys from './components/showQuerys.vue'


export default {
  name: 'App',
  components: {
    'app-nav': nav
  },
  data() {
    return {
      
    }
  }
}
</script>