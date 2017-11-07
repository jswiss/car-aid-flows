import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const api = axios.create({
	baseURL: 'https://api.myjson.com/bins',
});

const fundsTableArray = [];
const donorTableArray = [];
const locationTableArray = [];

export default new Vuex.Store({
	state: {
		raw: null,
		projectTableArray: [
			'Nom du projet',
			'Date de début',
			'Date de clôture',
			'Pilier',
			'Composante',
			'Secteur principal',
			'Montant du projet USD',
			'Décaissements 2017 USD',
			'Décaissements 2018 USD',
			'Décaissements 2019 USD',
		],
		fundsTableArray: [],
		donorTableArray: [],
		locationTableArray: [],
	},

	// actions: {
	// 	FETCH_DATA: ({ commit }) => {
	// 		return api.get('/16qbu7').then(res => {
	// 			commit('SET_RAW_DATA', res.data);
	// 		});
	// 	},
	// },

	mutations: {
		SET_RAW_DATA: (state, data) => {
			state.raw = data;
		},
	},
});
