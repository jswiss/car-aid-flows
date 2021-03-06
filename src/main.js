// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { ClientTable } from 'vue-bulma-tables-2';
import accounting from 'accounting';
import App from './App';
import router from './router';
import navbar from './components/Navbar';
import store from './store';

import '../node_modules/anychart/dist/js/anychart-base.min.js';
import '../node_modules/anychart/dist/js/anychart-treemap.min.js';
import '../node_modules/anychart/dist/js/anychart-map.min.js';

Vue.use(anychart);

anychart.licenseKey(process.env.CHART_KEY);

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.use(ClientTable);

Vue.config.productionTip = false;

// anychart(process.env.ANYCHART_ID);

Vue.filter('currency', val => accounting.formatNumber(val));
Vue.filter('decimal', val => accounting.formatNumber(val, 2));

/* eslint-disable no-new */
new Vue({
	template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
      <router-view></router-view>
      </div>
    </section>
  </div>
  `,
	router,
	store,
	components: {
		navbar: navbar,
		App: App,
	},
}).$mount('#app');
