import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { excelToJsDate } from '../utils/helpers';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

// base currency is USD
// const currencyUrl = 'http://www.mycurrency.net/service';
// const api = axios.create({
// 	baseURL: currencyUrl,
// });

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
	},
	getters,
	mutations,
	actions,
});

export default store;
