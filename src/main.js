import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import FastClick from 'fastclick'
import "./css/reset.scss"
FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
