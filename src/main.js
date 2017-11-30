// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { ClientTable } from 'vue-tables-2';
import App from './App';
import router from './router';
import navbar from './components/Navbar';

Vue.use(ClientTable);

Vue.config.productionTip = false;

// anychart(process.env.ANYCHART_ID);

Vue.filter('currency', function(value) {
	return value
		.toString()
		.replace(/,/g, '')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
