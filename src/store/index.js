import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';
import moment from 'moment';
import { excelToJsDate } from '../utils/helpers';
const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));
import getters from './getters';
import actions from './actions';
// import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		rawData: [],
		tableData: [],
		eurTable: [],
		xafTable: [],
		pillarComponentChart: [
			{
				x: 'Pilier 1',
				value: 33475393125,
				drillDown: [
					{ x: 'DDRR', value: 17122588625 },
					{ x: 'RSS', value: 2538231700 },
					{ x: 'Justice', value: 4235652400 },
					{ x: 'Cohésion sociale et réfugiés', value: 9578920975 },
				],
			},
			{
				x: 'Pilier 2',
				value: 86807900014,
				drillDown: [
					{ x: 'Redéploiement et gouvernance locale', value: 8006248825 },
					{ x: 'Services sociaux de base', value: 11395808275 },
					{ x: 'Résilience et sécurité alimentaire', value: 2417949750 },
					{
						x: 'Stabilité macroéconomique et bonne gouvernance',
						value: 64987893164,
					},
				],
			},
			{
				x: 'Pilier 3',
				value: 17814972000,
				drillDown: [
					{ x: 'Secteurs productifs', value: 2689487750 },
					{ x: 'Infrastructures', value: 12228031650 },
					{ x: 'Secteur privé et emploi', value: 2897453175 },
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
		treemap: [],
		cleanTree: [],
		colorShades: [
			'#6c82b1',
			'#8497be',
			'#9dabcb',
			'#b5c0d8',
			'#ced5e5',
			'#e6eaf2',
		],
		colorRange: ['#6c82b1', '#e6eaf2'],
	},
	getters,
	actions,
	mutations: {
		SET_RAW_DATA: (state, data) => {
			state.rawData = data;
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
				'Prévision de décaissements 2017-2019 USD',
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
		SET_TREEMAP: (state, data) => {
			if (state.treemapYear === 2017) {
				state.treemap = state.tree2017;
			} else if (state.treemapYear === 2018) {
				state.treemap = state.tree2018;
			} else {
				state.treemap = state.tree2019;
			}
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
													url: `http://localhost:7775/projects/${project.key}`,
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
			state.tree2018.values = d3
				.nest()
				.key(d => d.pillar)
				.key(d => d.component)
				.key(d => d.sector)
				.key(d => d.project)
				.rollup(d => d3.sum(d, d => d.projectedUSD2018))
				.entries(state.cleanTree);
			state.tree2018 = [
				{
					name: 2018,
					children: state.tree2018.values.map(pillar => {
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
													url: `http://localhost:7775/projects/${project.key}`,
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
			state.tree2019.values = d3
				.nest()
				.key(d => d.pillar)
				.key(d => d.component)
				.key(d => d.sector)
				.key(d => d.project)
				.rollup(d => d3.sum(d, d => d.projectedUSD2019))
				.entries(state.cleanTree);
			state.tree2019 = [
				{
					name: 2019,
					children: state.tree2019.values.map(pillar => {
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
													url: `http://localhost:7775/projects/${project.key}`,
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
		...firebaseMutations,
	},
});

export default store;
