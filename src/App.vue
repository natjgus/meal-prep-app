<template>
    <v-app>
        <app-nav></app-nav>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

import AppNav from "./components/AppNav";


export default {
  name: 'App',
  components: {
    AppNav,
  },
  data () {
    return {
      //
    }
  }
}
</script>
