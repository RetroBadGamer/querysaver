import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AddQuery from './components/addQuery.vue';
import ShowQuerys from './components/showQuerys.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addquery',
      name: 'addquery',
      component: AddQuery
    },
    {
      path: '/showquerys',
      name: 'showquerys',
      component: ShowQuerys
    }


  ]
})
