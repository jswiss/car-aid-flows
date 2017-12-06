import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

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
	mutations,
	actions,
});

export default store;
