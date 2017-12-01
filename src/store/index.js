import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// base currency is USD
// const currencyUrl = 'http://www.mycurrency.net/service';
// const api = axios.create({
// 	baseURL: currencyUrl,
// });

const store = new Vuex.Store({
	state: {
		currencyUnit: null,
		rawData: require('../assets/data/aidflows.json'),
		currencyRates: [],
	},
	getters: {
		usd: state =>
			state.currencyRates.filter(rate => (rate.currency_code = 'USD')),
		eur: state =>
			state.currencyRates.filter(rate => (rate.currency_code = 'EUR')),
		xaf: state =>
			state.currencyRates.filter(rate => (rate.currency_code = 'XAF')),
	},
	actions: {
		LOAD_CURRENCY_RATES: ({ commit }) => {
			Vue.http.get('http://www.mycurrency.net/service/rates').then(
				res => {
					commit('SET_CURRENCY_RATES', res.data);
				},
				err => {
					console.log(err);
				}
			);
		},
	},
	mutations: {
		SET_CURRENCY_RATES: (state, data) => {
			state.currencyRates = data;
		},
	},
});

export default store;
