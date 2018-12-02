<template>
  <div id="add-query">

      <h2>Add a new Query</h2>      
      <form id="form" v-if="!submitted">
          <p>Query Title:</p>
          <!-- <input type="text" class="clear" v-model.lazy="query.title"> -->
          <v-textarea rows="1" v-model.lazy="query.title" auto-grow></v-textarea>
          <!-- el v-model guarda lo que escribimos y lo guarda en
          "title" el .lazy syncs luego de cambiar, en lugar
          de luego de cada imput como es por default  -->
          <!-- <input type="text" v-model.lazy="query.title"> -->
          <p>Schema:</p>
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
          <p>Project:</p>
          <!-- <input type="text" class="clear" v-model.lazy="query.project"> -->
          <v-textarea rows="1" v-model.lazy="query.project" auto-grow></v-textarea>
<!--           <label for="Author">Author:</label>
          <select id="Author" v-model="query.author">
              <option for="Author" v-for="author in authors" :key="author.id"> {{ author }}</option>
          </select> -->
          <p>Keywords:</p>
          <v-textarea rows="1" v-model.lazy="query.keywords" auto-grow></v-textarea>
          <!-- <input type="text" class="clear" id="sarasa" v-model.lazy="query.keywords"> -->
          <p>Query Content:</p>
          <v-textarea v-model.lazy="query.content" box auto-grow></v-textarea>
          <!-- <textarea v-model.lazy="query.content"></textarea> -->
          <!-- en v-on:click el click es el argumento y postQuery el value -->
          <v-btn type="submit" v-on:click.prevent="postQuery" class="teal lighten-3">Add Query</v-btn>
          <v-btn class="teal lighten-3" @click="clearForm">Reset</v-btn>
          
          <!-- <button > Add Query </button> -->
      </form>

      <div v-if="submitted">
          <h3>Thanks for adding a query</h3>
          <v-btn @click="submitted = 'false'">Add another Query</v-btn>
      </div>

<!--       <div id="preview">
          <h3>Preview Query</h3>
          <p>Title: {{ query.title }} </p>
          <p>Schema: {{ query.schema }}</p>
          <p>Project: {{ query.project }}</p>
          <p>Author: {{ query.author }} </p>
          <p>Content: </p>
          <p>{{ query.content }}</p>          
      </div> -->
  </div>
</template>

<script>
export default {

  data () {
    return {
        query: {
            title: "",
            schema: "",
            project: "",
            keywords: "",
            content: "",
        },
        submitted: false
    }
  },
  methods: {
      /* Con esta funcion posteamos en la DB. Indicamos qué queremos enviar y
      luego el then ejecuta una funcion con la "data"  */
      postQuery: function(){
          this.$http.post('https://querysaver.firebaseio.com/querys.json', this.query)
          .then(function(){
              this.submitted = true;
          });
      },
      clearForm: function(){
          document.getElementById("form").reset();          
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
    padding: 5px 10px;
    max-width: 500px;
    background-color: #E0F2F1;
}

label {
    display: block;
    margin: 5px 0 10px 0;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
}
/* #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
} */
h2{
    margin: 10px auto;
    text-align: center;
}
#radioButtons input {
    display: inline-block;
    margin-right: 10px;
}

#radioButtons label{
    display: inline-block;
}
p{
    font-weight: bold;
}



</style>
