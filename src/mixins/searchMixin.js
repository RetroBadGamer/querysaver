export default {
    computed: {
        filteredQuerys: function(){
            return this.querys.filter(query => {
                return  query.schema.toLowerCase().match(this.search) ||
                query.keywords.toLowerCase().match(this.search); 
                /* 
                devuelve un nuevo array filtrado
                por cada (query) va a analizar true o false
                si devuelve true, el elemento se queda en el Array
                si devuelve falso, se filtra. 
                el input search con v-model guarda lo ingresado
                en el valor search y aca se utiliza como filtro 
                si title matchea, es true, si no es falso.  */
            });
        }
    }
}