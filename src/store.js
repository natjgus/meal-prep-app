import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search'
  },
  mutations: {
    setRecipes (state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan ) {
      try {
        let response = await axios.get(`${state.apiUrl}`,{
          params: {
            q: plan,
            app_id: 'ac65ea84',
            app_key: 'ea1e7e2e374d24fe36f8afafcd31e0f0',
            from: 0,
            to: 9
          }
        });
        commit('setRecipes', response.data.hits);
      } catch (error){
        commit('setRecipes', []);
      }
    }
  }
})
