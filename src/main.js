import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import './assets/styles.css'

Vue.use(Vuelidate)

Vue.config.productionTip = false
console.log("breaking cache v1");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
