import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const api = axios.create({
	baseURL: 'https://api.myjson.com/bins',
});

export default new Vuex.Store({
	state: {
		rawData: null,
	},

	actions: {
		FETCH_DATA: ({ commit }) => {
			return api.get('/16qbu7').then(res => {
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
