<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
        <div class="display-4 font-weight-black white--text text-xs-center">
            HEALTHY MEALS
        </div>
        <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR PUG</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a gourmet, meal-planning service for you pug!</div>
        <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">arrow_downward</v-icon>
        </v-btn>
        
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    data() {
        return {
        
        };
    }

}
</script>

<style scoped>
    .home-hero{
        background-image: url('https://lh3.googleusercontent.com/NvCWHYPClvWQKufceEDWKO4Qb1v31vodifLji7JvDdfWy8QCb6PIMprRh_UGU82Ax95vk2NTmePjXMeIIWPXeFggljbZqC9_zyEEVP1pmIffBdXOEQB_ZQG01P19MRUyeX7bKP9tzLM=w2400');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
</style>
