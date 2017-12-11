import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import createPersistedState from 'vuex-persistedstate';
import { excelToJsDate } from '../utils/helpers';
const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));
import getters from './getters';
import actions from './actions';
import { version } from '../../package.json';

Vue.use(Vuex);

// set require statements as actions, called beforeRouteEnter

const store = new Vuex.Store({
	// plugins: [createPersistedState()],
	state: {
		version: '',
		rawData: [],
		tableData: [],
		eurTable: [],
		xafTable: [],
		needsCoverage: [
			['DDRR', 87355512, 115000000],
			['RSS', 24785343, 98000000],
			['Justice', 33509799, 64000000],
			['Cohésion sociale et réfugiés', 78307208, 82000000],
			['Redéploiement et gouvernance locale', 93563239, 71000000],
			['Services sociaux de base', 257108524, 310000000],
			['Résilience et sécurité alimentaire', 64303531, 54000000],
			['Stabilité macroéconomique et bonne gouvernance', 451797604, 296000000],
			['Secteurs productifs', 132312723, 175000000],
			['Infrastructures', 441138657, 286000000],
			['Secteur privé et emploi', 50120545, 42000000],
		],
		disbursementRate: [
			['Pilier 1', 223957862, 58218075],
			['Pilier 2', 811980973, 150970261],
			['Pilier 3', 441070532, 30352426],
		],
		budgetSupport: [
			['Fonds monétaire international*', 34871795, 55623711, 47692308],
			['Banque mondiale**', 20000000, 0, 25000000],
			['Union Européenne', 24615385, 22283505, 22393162],
			['Banque africaine de développement', 0, 16500000, 0],
			['AFD', 14529915, 11226804, 11282051],
			['Autres', 6153846, 1701031, 3760684],
		],
		pillarComponentChart: [
			{
				x: 'Pilier 1',
				value: 58218075,
				drillDown: [
					{ x: 'DDRR', value: 29778415 },
					{ x: 'RSS', value: 4414316 },
					{ x: 'Justice', value: 7366352 },
					{ x: 'Cohésion sociale et réfugiés', value: 16658993 },
				],
			},
			{
				x: 'Pilier 2',
				value: 150970261,
				drillDown: [
					{ x: 'Redéploiement et gouvernance locale', value: 13923911 },
					{ x: 'Services sociaux de base', value: 19818797 },
					{ x: 'Résilience et sécurité alimentaire', value: 4205130 },
					{
						x: 'Stabilité macroéconomique et bonne gouvernance',
						value: 113022423,
					},
				],
			},
			{
				x: 'Pilier 3',
				value: 30982560,
				drillDown: [
					{ x: 'Secteurs productifs', value: 4677370 },
					{ x: 'Infrastructures', value: 21266142 },
					{ x: 'Secteur privé et emploi', value: 5039049 },
				],
			},
		],
		pillarCountChart: [
			{
				x: 'Pilier 1',
				value: 123,
				drillDown: [
					{ x: 'DDRR', value: 16 },
					{ x: 'RSS', value: 38 },
					{ x: 'Justice', value: 37 },
					{ x: 'Cohésion sociale et réfugiés', value: 42 },
				],
			},
			{
				x: 'Pilier 2',
				value: 155,
				drillDown: [
					{ x: 'Redéploiement et gouvernance locale', value: 10 },
					{ x: 'Services sociaux de base', value: 89 },
					{ x: 'Résilience et sécurité alimentaire', value: 24 },
					{ x: 'Stabilité macroéconomique et bonne gouvernance', value: 29 },
				],
			},
			{
				x: 'Pilier 3',
				value: 62,
				drillDown: [
					{ x: 'Secteurs productifs', value: 23 },
					{ x: 'Infrastructures', value: 28 },
					{ x: 'Secteur privé et emploi', value: 11 },
				],
			},
		],
		xaf: 575,
		usd: 1,
		eur: 1.1408,
		xafToEur: 655.96,
		tableColumns: [],
		treemapYear: 2017,
		tree2017: {},
		tree2018: {},
		tree2019: {},
		cleanTree: [],
		colorShades2017: [
			'#061c4b',
			'#082564',
			'#0a2f7e',
			'#22438a',
			'#3a5897',
			'#536da4',
		],
		colorShades2018: [
			'#842514',
			'#b0321b',
			'#dc3f22',
			'#df5238',
			'#e3654e',
			'#e67864',
		],
		colorShades2019: [
			'#2d5921',
			'#3c772c',
			'#4b9537',
			'#5d9f4b',
			'#6eaa5e',
			'#81b473',
		],
		colorRange2017: ['#061c4b', '#536da4'],
		colorRange2018: ['#842514', '#e6eaf2'],
		colorRange2019: ['#2d5921', '#81b473'],
	},
	getters,
	actions,
	mutations: {
		// INITIALISE_STORE: state => {
		// 	let store = JSON.parse(localStorage.getItem('store'));
		// 	// Check the version stored against current. If different, don't
		// 	// load the cached version
		// 	if (store.version == version) {
		// 		this.replaceState(Object.assign(state, store));
		// 	} else {
		// 		state.version = version;
		// 	}
		// },

		SET_RAW: (state, data) => {
			state.rawData = require('../assets/data/table-data.json');
		},
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
				'Prévision de décaissements 2017-2019',
			];
		},
		SET_TREEMAP_YEAR: (state, data) => {
			state.treemapYear = data;
		},
		SET_CLEAN_TREE: (state, data) => {
			state.cleanTree = state.rawData.map(k => {
				return {
					project: k['Nom du projet'],
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
		SET_TREES: (state, data) => {
			state.tree2017.values = d3
				.nest()
				.key(d => d.pillar)
				.key(d => d.component)
				.key(d => d.sector)
				.key(d => d.project)
				.rollup(d => d3.sum(d, d => d.usd2017))
				.entries(state.cleanTree);
			state.tree2017 = [
				{
					name: 2017,
					children: state.tree2017.values.map(pillar => {
						return {
							name: pillar.key,
							children: pillar.values.map(component => {
								return {
									name: component.key,
									children: component.values.map(sector => {
										return {
											name: sector.key,
											children: sector.values.map(project => {
												return {
													name: project.key,
													value: project.value,
													url: `http://suiviaide-rca.cf.s3-website.eu-central-1.amazonaws.com/projects/${
														project.key
													}`,
												};
											}),
										};
									}),
								};
							}),
						};
					}),
				},
			];
		},
		// ...firebaseMutations,
	},
});

// store.subscribe((mutation, state) => {
// 	let store = {
// 		version: state.version,
// 		rawData: state.rawData,
// 		tableData: state.tableData,
// 	};
// 	// if (!localStorage.getItem('store')) {
// 	localStorage.setItem('store', JSON.stringify(store));
// 	// }
// });

export default store;
