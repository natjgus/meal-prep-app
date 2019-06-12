import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    user: null,
    isAuthenticated: false,
    apiUrl: 'https://api.edamam.com/search',
    userRecipes: []
  },
  mutations: {
    setRecipes (state, payload) {
      state.recipes = payload;
    },
    setUser (state, payload) {
      state.user = payload;
    },
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload;
    },
    setUserRecipes (state, payload) {
      state.userRecipes = payload;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
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
    },
    userJoin( { commit }, {email, password}) {
      firebase  
        .auth()
        // below method will return a user object if succesful
        .createUserWithEmailAndPassword(email, password)
        // we can then take that object and pass it to the setUser mutation
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/about');
        })
        .catch( ()=>{
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
        });
    },
    userLogin ({ commit }, {email, password}) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/about');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
        });
    },
    userSignOut({commit}) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
        });
    },
    // to add a recipe we need the state to get the current user and their uid
    addRecipe ( { state }, payload) {
      firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .push(payload.recipe.label);
    },
    getUserRecipes( {state, commit}) {
      return firebase
        .database()
        //we want to search out the database for the specific user uid (which is in our user state object)
        .ref('users/' + state.user.user.uid)
          .once('value', snapshot => {
            commit('setUserRecipes', snapshot.val());
          });
    }
  }
})
