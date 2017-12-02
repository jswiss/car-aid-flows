import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { excelToJsDate } from '../utils/helpers';

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
		eurTable: [],
		xafTable: [],
		xaf: 575,
		usd: 1,
		eur: 1.1408,
		xafToEur: 655.96,
		tableColumns: [],
	},
	getters: {
		// usdObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'USD'),
		// eurObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'EUR'),
		// xafObj: state =>
		// 	state.currencyRates.filter(rate => rate.currency_code === 'XAF'),
		tableData: state => state.tableData,
		tableColumns: state => state.tableColumns,
		xafTableData: state => state.xafTable,
		eurTableData: state => state.eurTable,
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
		LOAD_COLUMNS: ({ commit }) => {
			commit('SET_COLUMNS');
		},
		LOAD_EUR: ({ commit }) => {
			commit('SET_EUR');
		},
		LOAD_XAF: ({ commit }) => {
			commit('SET_XAF');
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
			state.tableData.forEach(d => {
				if (d['Date de début'] !== null) {
					d['Date de début'] = moment(excelToJsDate(d['Date de début'])).format(
						'MMM, YYYY'
					);
				}
				if (d['Date de clôture'] !== null) {
					d['Date de clôture'] = moment(
						excelToJsDate(d['Date de clôture'])
					).format('MMM, YYYY');
				}
			});
		},
		SET_XAF: (state, data) => {
			state.xafTable = state.rawData.map(o => {
				return {
					'Nom du projet': o['Nom du projet'],
					'Date de début': o['Date de début'],
					'Date de clôture': o['Date de clôture'],
					Pilier: o.Pilier,
					Composante: o.Composante,
					'Secteur principal': o['Secteur principal'],
					Bailleurs: o.Bailleurs,
					"Partenaires d'exécution": o["Partenaires d'exécution"],
					'Montant du projet en devise':
						o['Montant du projet en devise'] * state.xaf,
					'Décaissements 2017 en devise':
						o['Décaissements 2017 en devise'] * state.xaf,
					'Prévision de décaissements 2017-2019 USD':
						o['Prévision de décaissements 2017-2019 USD'] * state.xaf,
				};
			});
		},
		SET_EUR: (state, data) => {
			state.eurTable = state.rawData.map(o => {
				return {
					'Nom du projet': o['Nom du projet'],
					'Date de début': o['Date de début'],
					'Date de clôture': o['Date de clôture'],
					Pilier: o.Pilier,
					Composante: o.Composante,
					'Secteur principal': o['Secteur principal'],
					Bailleurs: o.Bailleurs,
					"Partenaires d'exécution": o["Partenaires d'exécution"],
					'Montant du projet en devise':
						o['Montant du projet en devise'] * state.eur,
					'Décaissements 2017 en devise':
						o['Décaissements 2017 en devise'] * state.eur,
					'Prévision de décaissements 2017-2019 USD':
						o['Prévision de décaissements 2017-2019 USD'] * state.eur,
				};
			});
		},
		SET_COLUMNS: (state, data) => {
			state.tableColumns = [
				'Nom du projet',
				'Date de début',
				'Date de clôture',
				'Pilier',
				'Composante',
				'Secteur principal',
				'Bailleurs',
				"Partenaires d'exécution",
				'Montant du projet en devise',
				'Décaissements 2017 en devise',
				'Prévision de décaissements 2017-2019 USD',
			];
		},
	},
});

export default store;
