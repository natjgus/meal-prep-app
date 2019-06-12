<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 
            v-for="(recipeItem, index) in getRecipes" 
            :key="index">
                <v-card>
                    <v-responsive>
                        <v-img :src="recipeItem.recipe.image"></v-img>
                    </v-responsive>
                    <v-card-text>
                        <div class="title mb-3">
                            {{ recipeItem.recipe.label }}
                        </div>
                        <div class="subheading">
                            Ingredients
                        </div>
                        <ul>
                            <li v-for="(ingredient, i) in recipeItem.recipe.ingredientLines" :key="i">
                                {{ ingredient }}
                            </li>
                        </ul>
                    </v-card-text>
                    <v-card-actions @click="orderRecipe(recipeItem)">
                        <v-btn block dark>Order Here!</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import router from '@/router'
    export default {
        name: 'RecipeDisplay',
        computed: {
            getRecipes () {
                return this.$store.state.recipes;
            },
            isAuthenticated () {
                return this.$store.getters.isAuthenticated;
            }
        },
        methods: {
            orderRecipe(recipeItem) {
                if (this.isAuthenticated) {
                    this.$store.dispatch('addRecipe', recipeItem);
                }
                else {
                    router.push('/sign-in');
                }
            }
        }
    }
</script>

<style>

</style>
