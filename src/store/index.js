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
		tableHeadersSubs: require('../assets/data/table-headers-subs.json'),
		currencyRates: [],
		tableData: [],
		xaf: 1,
		usd: 575,
		eur: 655.96,
	},
	getters: {
		// usdObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'USD'),
		// eurObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'EUR'),
		// xafObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'XAF'),
		tableData: state => state.tableData,
	},
	actions: {
		// LOAD_CURRENCY_RATES: ({ commit }) => {
		// 	Vue.http.get('http://www.mycurrency.net/service/rates').then(
		// 		res => {
		// 			commit('SET_CURRENCY_RATES', res.data);
		// 		},
		// 		err => {
		// 			console.log(err);
		// 		}
		// 	);
		// },
		LOAD_TABLE: ({ commit }) => {
			commit('SET_TABLE');
		},
	},
	mutations: {
		// SET_CURRENCY_RATES: (state, data) => {
		// 	state.currencyRates = data;
		// },
		SET_TABLE: (state, data) => {
			state.tableData = state.rawData.map(o => {
				return {
					'Nom du projet': o['Nom du projet'],
					'Date de début': o['Date de début'],
					'Date de clôture': o['Date de clôture'],
					Pilier: o.Pilier,
					Composante: o.Composante,
					'Secteur principal': o['Secteur principal'],
					Bailleurs: o.Bailleurs,
					"Partenaires d'exécution": o["Partenaires d'exécution"],
					'Montant du projet en devise': o['Montant du projet en devise'],
					'Décaissements 2017 en devise': o['Décaissements 2017 en devise'],
					'Prévision de décaissements 2017-2019 USD':
						o['Prévision de décaissements 2017-2019 USD'],
				};
			});
		},
	},
});

export default store;
