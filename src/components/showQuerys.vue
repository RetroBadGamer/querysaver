<template>
  <div id="show-querys">
      <h1>All the Querys</h1>
        <input type="text" v-model="search" placeholder="search querys">


      <!-- en un div vamos a mostrar las querys que recibimos de la DB
      en el lifehook Created() con un v-for -->
      <div v-for="query in filteredQuerys" :key="query.id" class="single-query">
          <router-link v-bind:to="'/query/' + query.id"><h2>{{ query.title }}</h2></router-link>
  <!--         <p> Schema: {{ query.schema }}</p>
          <p> Project: {{ query.project }}</p>
          <p>Submitter: {{ query.author }}</p>
          <p>Query: </p>
          <article>{{ query.content | snippet }}</article> -->
            <!-- | snippet es un filtro (ver main.js) -->

      </div>    
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
        querys: [],
        search: ''
    }
  },
  methods: {

  },
/* Apenas se crea el componente, necesitamos recuperar los datos de
las Querys y guardarlas en una variable para poder 
utilizarlas en el componente */  
  created(){
      this.$http.get('https://querysaver.firebaseio.com/querys.json')
      .then(function(data){
          return data.json();
      }).then(function(data){
          var querysArray = [];
          for (let key in data){
              data[key].id = key
              querysArray.push(data[key]);
          }
          this.querys = querysArray;
      })
  },
  computed: {

  },
  mixins: [searchMixin]
}
</script>

<style>

#show-querys{
    max-width: 800px;
    margin: 0 auto;
}
.single-query{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
/* a{
    text-decoration: none;
    font-size: 12px;
} */

</style>
