import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		rawData: null,
	},

	actions: {
		FETCH_DATA: ({ commit }) => {
			return axios.get('https://api.myjson.com/bins/16qbu7').then(res => {
				commit('SET_RAW_DATA', res.data);
			});
		},
	},

	mutations: {
		SET_RAW_DATA: (state, data) => {
			state.rawData = data;
		},
	},
});
