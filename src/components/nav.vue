<template>
    <div class="nav">
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Main Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
        <v-toolbar>
            <v-btn color="teal" dark @click.stop="drawer =!drawer">Menu</v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat to="/">
                    <v-icon left large>fingerprint</v-icon>
                    
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>

        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            items:[
                {title: 'Ver Querys', icon: 'pageview', route: '/ShowQuerys'},
                {title: 'Crear Query', icon: 'library_add', route: '/AddQuery'},
                {title: 'Projectos', icon: 'work', route: '/Projects'},
                {title: 'Staff', icon: 'wc', route: '/Staff'}
            ]
        }
        
    }
    
}
</script>

