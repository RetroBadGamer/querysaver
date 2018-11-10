import showQuerys from './components/showQuerys.vue';
import addQuery from './components/addQuery.vue';
import singleQuery from './components/singleQuery.vue';

export default[
    {path: '/', component: showQuerys},
    {path: '/add', component: addQuery},
    {path: '/query/:id', component: singleQuery}
]