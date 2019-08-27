import Vue from 'vue'
import App from './components/App.vue'

window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
  render: h => h(App)
}).$mount('#app');
