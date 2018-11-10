<template>
  <div id="add-query">

      <h2>Add a new Query</h2>      
      <form v-if="!submitted">
          <label>Query Title:</label>
          <!-- el v-model guarda lo que escribimos y lo guarda en
          "title" el .lazy syncs luego de cambiar, en lugar
          de luego de cada imput como es por default  -->
          <input type="text" v-model.lazy="query.title" required>
          <div id="radioButtons">
            <label for="Customer">Customer</label>
            <input type="radio" id="Customer" value="Customer" v-model="query.schema">
            <label for="Account">Account</label>
            <input type="radio" id="Account" value="Account" v-model="query.schema">
            <label for="Letters">Letters</label>
            <input type="radio" id="Letters" value="Letters" v-model="query.schema">
            <label for="Caps">Caps</label>
            <input type="radio" id="Caps" value="Caps" v-model="query.schema">
          </div>
          <label>Project:</label>
          <input type="text" v-model.lazy="query.project">
          <label for="Author">Author:</label>
          <select id="Author" v-model="query.author">
              <option for="Author" v-for="author in authors" :key="author.id"> {{ author }}</option>
          </select>
          <label>Query Content:</label>
          <textarea v-model.lazy="query.content"></textarea>
          <!-- en v-on:click el click es el argumento y postQuery el value -->
          <button v-on:click.prevent="postQuery"> Add Query </button>
      </form>

      <div v-if="submitted">
          <h3>Thanks for adding a query</h3>
      </div>

      <div id="preview">
          <h3>Preview Query</h3>
          <p>Title: {{ query.title }} </p>
          <p>Schema: {{ query.schema }}</p>
          <p>Project: {{ query.project }}</p>
          <p>Author: {{ query.author }} </p>
          <p>Content: </p>
          <p>{{ query.content }}</p>          
      </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
        query: {
            title: "",
            content: "",
            schema: "",
            project: "",
            author: ""
        },
        authors: ['Lobo', 'Liano', 'Mex', 'Pato', 'Luciana'],
        submitted: false
    }
  },
  methods: {
      /* Con esta funcion posteamos en la DB. Indicamos qué queremos enviar y
      luego el then ejecuta una funcion con la "data"  */
      postQuery: function(){
          this.$http.post('https://querysaver.firebaseio.com/querys.json', this.query)
          .then(function(data){
              console.log(data);
              this.submitted = true;
          });
      }
  }
}
</script>

<style>

#add-query *{
    box-sizing: border-box;
}
#add-query{
    margin: 20px auto;
    max-width: 500px;
}

label {
    display:block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#radioButtons input {
    display: inline-block;
    margin-right: 10px;
}

#radioButtons label{
    display: inline-block;
}



</style>
