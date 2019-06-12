<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
                <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
                <v-spacer class="hidden-md-and-up"></v-spacer>
                <router-link to="/">
                    <v-toolbar-title>{{appTitle}}</v-toolbar-title>
                </router-link>
                
                <router-link to="/menu"><v-btn flat class="hidden-sm-and-down">Menu</v-btn></router-link>
                <v-spacer class="hidden-sm-and-down"></v-spacer>
                <router-link to="/sign-in">
                    <v-btn class="hidden-sm-and-down" flat>SIGN IN</v-btn>
                </router-link>
                <router-link to="/join">
                    <v-btn class="hidden-sm-and-down" color="brown lighten-1">JOIN</v-btn>
                </router-link>
                
            </v-toolbar>


        </span>
</template>

<script>
export default {
    name: 'AppNav',
    data: function () {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        }
    }
}
</script>

<style scoped>
    a {
    color: white;
    text-decoration: none;
    }
</style>
