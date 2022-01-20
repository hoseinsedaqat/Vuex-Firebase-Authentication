import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false
  },
  mutations: {

    async pressedRegister(state, user) {
      console.log(user);
      try {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        router.push('/login')
        state.auth = false
        localStorage.setItem("firebaseAuth", JSON.stringify({ auth: false }));
      } catch (e) {
        console.log(e);
      }
    },

    async pressedLogin(state, user) {
      console.log(user);
      try {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        state.auth = true
        localStorage.setItem("firebaseAuth", JSON.stringify({ auth: true }));
        var auth = JSON.parse(localStorage.getItem('firebaseAuth'));
        if (auth.auth) {
          // router.push('/secret')
          window.location.href = '/secret'
        } else {
          router.push('/register')
        }
      } catch (e) {
        console.log(e);
      }
    },

    async SignOut(state) {
      try {
        await firebase.auth().signOut();
        window.location.href = '/'
        state.auth = false
        localStorage.setItem("firebaseAuth", JSON.stringify({ auth: false }));
      } catch (e) {
        console.log(e);
      }
    }
  },
  actions: {
    pressedRegister: ({ commit }, user) => {
      commit('pressedRegister', user)
    },
    pressedLogin: ({ commit }, user) => {
      commit('pressedLogin', user)
    },
    SignOut: ({ commit }) => {
      commit('SignOut')
    }
  },
  modules: {
  }
})
