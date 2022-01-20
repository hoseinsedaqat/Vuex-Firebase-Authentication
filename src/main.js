import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase/compat/app'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOZmXrEQ6RelmhqkTEzTtIbb3NedZ4uM",
  authDomain: "fir-auth-traning.firebaseapp.com",
  projectId: "fir-auth-traning",
  storageBucket: "fir-auth-traning.appspot.com",
  messagingSenderId: "548708041985",
  appId: "1:548708041985:web:bbc05f8ee30e8ce44e4700",
  measurementId: "G-6LLQFTSEG8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



