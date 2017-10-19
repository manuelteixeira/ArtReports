// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';

import('../node_modules/vuetify/dist/vuetify.min.css');
Vue.use(Vuetify);


Vue.use(VueI18n);

// Get locales
const pt = require('./locales/pt.json');
const en = require('./locales/en.json');

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'pt', // set locale
  messages: {
    pt,
    en,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});
