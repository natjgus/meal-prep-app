<template>
    <v-container fluid>
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <v-list class>
                <v-list-tile v-for="(recipe, index) in userRecipes" :key="index">{{ recipe }}</v-list-tile>
            </v-list>
        </v-layout>
        <v-layout justify-center>
            <div xs12 mt-5>
                <v-btn color="dark" to="/menu">Go To Menu</v-btn>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'About',
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    },
    mounted () {
        this.getRecipes()
    },
    computed: {
        userRecipes () {
            return this.$store.state.userRecipes;
        }
    }
};
</script>
<style scoped>
</style>