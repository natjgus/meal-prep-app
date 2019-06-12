<template>
    <v-app>
        <app-nav></app-nav>
        <home></home>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

import AppNav from "./components/AppNav";
import Home from "./views/Home";

export default {
  name: 'App',
  components: {
    AppNav,
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
