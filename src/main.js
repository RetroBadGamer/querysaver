import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueResource);
/* 
new Vue({
  router,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyAOqdMXTdL29OhnjuRslaU0BIFZtofWl08",
      authDomain: "vue-practica.firebaseapp.com",
      databaseURL: "https://vue-practica.firebaseio.com",
      projectId: "vue-practica",
      storageBucket: "vue-practica.appspot.com",
      messagingSenderId: "1043132678632"
    })
  }
}).$mount('#app')
 */

new Vue({
  router,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyCNx3aANTEE-mAyJ5VGxX3QahrWTYDaHIA",
      authDomain: "querysaver.firebaseapp.com",
      databaseURL: "https://querysaver.firebaseio.com",
      projectId: "querysaver",
      storageBucket: "querysaver.appspot.com",
      messagingSenderId: "213666203470"
    })
  }
}).$mount('#app')