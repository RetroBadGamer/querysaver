import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

 
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.filter('snippet', function(value){
  return value.slice(0, 20) + ' [ + ]';
})
//Custom Filters

/* value corresponde al valor que queremos filtrar. Es el que se va a 
encontrar en el element (ver showQuerys.vue). 
*/

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})


/* Custom Directives

 Si queremos crear directivas custom globales (directivas = v-something)
creamos la directiva que lleva 2 parametros: El nombre y un objeto
con la funcionalidad. Dentro tiene un bind que se dispara cuando
la directiva se acopla al elemento:


 Esta directiva asignaría un color random al elemento al que se 
 encuentre acoplado con v-rainbow

Vue.directive('rainbow', {
  bind(el, binding, vnode){
 el, es el elemento al que acoplamos la directiva    
binding refiere a la informacion sobre la conexion e/ directiva y elemento 
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
}) 

Estas directivas pueden llevar custom arguments (ver addQuery.vue file) */
