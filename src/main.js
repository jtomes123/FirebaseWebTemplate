// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Icon from 'vue-awesome'

Vue.config.productionTip = false

// Register custom components
Vue.component('p-projects', Projects)
Vue.component('p-about', About)
Vue.component('p-contact', Contact)
Vue.component('icon', Icon)

// Use the BootstrapVue and VueFire extension
Vue.use(VueFire)
Vue.use(BootstrapVue)

// Here, you will enter your firebase credentials
firebase.initializeApp({
  projectId: 'YOUR PROJECT ID HERE',
  databaseURL: 'YOUR FIREBASE DATABASE URL HERE'
})

export const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
