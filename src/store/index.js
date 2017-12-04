import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		rawData: require('../assets/data/aidflows.json'),
		tableData: [],
		eurTable: [],
		xafTable: [],
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
