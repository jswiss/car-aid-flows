// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import accounting from 'accounting';
import App from './App';
import router from './router';
import navbar from './components/Navbar';

Vue.config.productionTip = false;

// anychart(process.env.ANYCHART_ID);

Vue.filter('currency', val => accounting.formatNumber(val));
Vue.filter('decimal', val => accounting.formatNumber(val, 2));
Vue.filter('uppercase', function(val) {
	return val.toUpperCase();
});
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
	data() {
		return {};
	},
	components: {
		navbar,
		App,
	},
}).$mount('#app');
