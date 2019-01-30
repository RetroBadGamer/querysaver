<template>
    <v-container grid-list-xl>
        <div id="show-querys">
        <!-- <h1>All the Querys</h1> -->
        <input type="text" v-model="search" placeholder="Enter schema name to filter" class="busqueda">
<!--         <div>
            <v-btn round color="teal" dark v-on:click="customer = !customer">Customer</v-btn>
            <v-btn round color="teal" dark v-on:click="account = !account">Account</v-btn>
            <v-btn round color="teal" dark v-on:click="letters = !letters">Letters</v-btn>
            <v-btn round color="teal" dark v-on:click="caps = !caps">Caps</v-btn>
        </div> -->
      <!-- en un div vamos a mostrar las querys que recibimos de la DB
      en el lifehook Created() con un v-for -->
            <div>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="query in filteredQuerys" :key="query.id">
                                <div slot="header" class="font-weight-bold titlehover">
                                        <p> {{query.title}} <v-spacer></v-spacer> {{query.schema}} </p>
                                </div>
                                <v-card>
                                    <v-card-text class="teal lighten-3 font-weight-bold">
                                        <p> Schema: {{ query.schema }}</p>
                                      <!--   <p> Project: {{ query.project }}</p> -->
                                       <!--  <p> Keywords: {{ query.keywords }}</p> -->
                                        <p> Query: </p>
                                        <p class="content"><pre>{{ query.content }}</pre></p>
                                        <p> Info: </p>
                                        <p>{{ query.info }}</p>
                                    </v-card-text>
                                </v-card>       
                    </v-expansion-panel-content>
                </v-expansion-panel> 
            </div>              
        </div>
        
</v-container>
<!--         <div v-for="query in filteredQuerys" :key="query.id" class="single-query">
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <div slot="header" class="font-weight-bold">
                        {{query.title}}
                    </div>
                    <v-card>
                        <v-card-text class="teal lighten-3 font-weight-bold">
                                <p> Schema: {{ query.schema }}</p>
                                <p> Project: {{ query.project }}</p>
                                <p> Keywords: {{ query.keywords }}</p>
                                <p> Query: </p>
                            <article><pre>{{ query.content }}</pre></article>
                        </v-card-text>
                    </v-card>
                 </v-expansion-panel-content>
            </v-expansion-panel>
        </div>  -->
  
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
        querys: [],
        search: '',
        customer: false,
        account: false,
        letters: false,
        caps: false,
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

/* #show-querys{
    max-width: 800px;
    margin: 0 auto;
} */
/* .single-query{
    padding: 5px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
} */
h1{
    text-align: center;
    text-transform: uppercase;
}
/* a{
    text-decoration: none;
    font-size: 12px;
} */
.busqueda{
    border: 3px solid #80CBC4;
    width: 100%;
}

.content{
overflow:hidden;
}

</style>
