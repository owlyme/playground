import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
