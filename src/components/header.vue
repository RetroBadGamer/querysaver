<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Querys</router-link></li>
            <li><router-link to="/Add" exact>Add new Query</router-link></li>
            <!-- router-link intercepta el click para no tener que
            cargar una pagina nueva
            exact hace que el valor de to= tenga que ser exacto
            para darle la propiedad active -->
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius:10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}

</style>

