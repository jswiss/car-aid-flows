// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import { ClientTable } from 'vue-bulma-tables-2';
import { ClientTable } from 'vue-tables-2';
import App from './App';
import router from './router';
import navbar from './components/Navbar';
import store from './store';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(ClientTable, true);

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
	store,
	components: {
		navbar,
		App,
	},
	created() {
		// this.$store.dispatch('LOAD_CURRENCY_RATES');
		this.$store.dispatch('LOAD_TABLE');
		this.$store.dispatch('LOAD_COLUMNS');
	},
}).$mount('#app');
