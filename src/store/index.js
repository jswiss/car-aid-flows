import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { excelToJsDate } from '../utils/helpers';

const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));

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
		tableData: [],
		eurTable: [],
		xafTable: [],
		xaf: 575,
		usd: 1,
		eur: 1.1408,
		xafToEur: 655.96,
		tableColumns: [],
		treemapYear: 2017,
		treemap: {},
		cleanTree: [],
	},
	getters: {
		raw: state => state.rawData,
		tableData: state => state.tableData,
		tableColumns: state => state.tableColumns,
		xafTableData: state => state.xafTable,
		eurTableData: state => state.eurTable,
		treemapYear: state => state.treemapYear,
		treemap: state => state.treemap,
	},
	actions: {
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
		LOAD_TREEMAP: ({ commit }) => {
			commit('SET_TREEMAP');
		},
		LOAD_CLEAN_TREE: ({ commit }) => {
			commit('SET_CLEAN_TREE');
		},
	},
	mutations: {
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
						'YYYY - MM'
					);
				}
				if (d['Date de clôture'] !== null) {
					d['Date de clôture'] = moment(
						excelToJsDate(d['Date de clôture'])
					).format('YYYY - MM');
				}
			});
		},
		SET_XAF: (state, data) => {
			state.xafTable = state.tableData.map(o => {
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
			state.eurTable = state.tableData.map(o => {
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
		SET_TREEMAP_YEAR: (state, data) => {
			state.treemapYear = data;
		},
		SET_CLEAN_TREE: (state, data) => {
			state.cleanTree = state.rawData.map(k => {
				return {
					name: k['Nom du projet'],
					pillar: k['Pilier'],
					component: k['Composante'],
					sector: k['Secteur principal'],
					totalUSD: k['Montant du projet USD'],
					usd2017: k['Décaissements 2017 USD'],
					projectedUSD2018:
						k['Prévision de décaissements 2017 USD'] +
						k['Prévision de décaissements 2018 USD'],
					projectedUSD2019: k['Prévision de décaissements 2019 USD'],
				};
			});
		},
		SET_TREEMAP: (state, data) => {
			if (state.treemapYear === 2017) {
				state.treemap.key = 2017;
				state.treemap.values = d3
					.nest()
					.key(d => d.pillar)
					.key(d => d.component)
					.key(d => d.sector)
					.rollup(d => d3.sum(d, d => d.usd2019))
					.entries(state.cleanTree);
			} else if (state.treemapYear === 2018) {
				state.treemap.key = 2018;
				state.treemap.values = d3
					.nest()
					.key(d => d.pillar)
					.key(d => d.component)
					.key(d => d.sector)
					.rollup(d => d3.sum(d, d => d.usd2018))
					.entries(state.cleanTree);
			} else {
				state.treemap.key = 2019;
				state.treemap.values = d3
					.nest()
					.key(d => d.pillar)
					.key(d => d.component)
					.key(d => d.sector)
					.rollup(d => d3.sum(d, d => d.usd2017))
					.entries(state.cleanTree);
			}
		},
		//  state.treemap = { key: 2017, values: d3
		// 		.nest()
		// 		.key(d => d.pillar)
		// 		.key(d => d.component)
		// 		.key(d => d.sector)
		// 		.rollup(d => d3.sum(d, d => d.usd2017))
		// 		.entries(state.cleanTree) });
		// } else if (state.treemapYear === '2018') {
		// 	state.treemap = {
		// 		key: 2018,
		// 		values: d3
		// 			.nest()
		// 			.key(d => d.pillar)
		// 			.key(d => d.component)
		// 			.key(d => d.sector)
		// 			.rollup(d => d3.sum(d, d => d.usd2018))
		// 			.entries(state.cleanTree),
		// 	};
		// } else {
		// 	state.treemap = {
		// 		key: 2019,
		// 		values: d3
		// 			.nest()
		// 			.key(d => d.pillar)
		// 			.key(d => d.component)
		// 			.key(d => d.sector)
		// 			.rollup(d => d3.sum(d, d => d.usd2019))
		// 			.entries(state.cleanTree),
		// 	};
	},
});

export default store;
