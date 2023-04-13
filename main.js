import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration here
};
firebase.initializeApp(firebaseConfig);

// Add Firebase to Vue prototype
Vue.prototype.$firebase = firebase;

new Vue({
  render: h => h(App),
}).$mount('#app');
