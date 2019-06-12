<template>
    <div>
        <home-plans></home-plans>
        <recipe-display></recipe-display>
    </div>
</template>

<script>
    import HomePlans from '../components/HomePlans';
    import RecipeDisplay from '../components/RecipeDisplay';
    export default {
        name: 'Menu',
        components: {
            HomePlans,
            RecipeDisplay
        }
    }
</script>

<style>

</style>
