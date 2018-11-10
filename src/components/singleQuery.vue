<template>
    <div id="singleQuery">
        <h1>{{ query.title }}</h1>
        <p> Schema: {{ query.schema }}</p>
        <p> Project: {{ query.project }}</p>
        <p>Submitter: {{ query.author }}</p>
        <p>Query: </p>
        <article>{{ query.content }}</article>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            query: {}
        }
    },
    created(){
        this.$http.get('https://querysaver.firebaseio.com/querys/' + this.id + '.json')
        .then(function(data){
            return data.json();
        }).then(function(data){
            this.query = data;
        })
    }
}
</script>

