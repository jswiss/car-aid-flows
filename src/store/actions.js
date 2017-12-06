import Vue from 'vue';

const LOAD_TABLE = ({ commit }) => {
	commit('SET_TABLE');
};
const LOAD_COLUMNS = ({ commit }) => {
	commit('SET_COLUMNS');
};
const LOAD_EUR = ({ commit }) => {
	commit('SET_EUR');
};
const LOAD_XAF = ({ commit }) => {
	commit('SET_XAF');
};
const LOAD_TREEMAP = ({ commit }) => {
	commit('SET_TREEMAP');
};
const LOAD_CLEAN_TREE = ({ commit }) => {
	commit('SET_CLEAN_TREE');
};
const LOAD_TREES = ({ commit }) => {
	commit('SET_TREES');
};
const GET_RAW_DATA = ({ commit }) => {
	Vue.http
		.get(
			`https://api.mlab.com/api/1/databases/car-aid-flows/collections/raw?apiKey=${
				process.env.DB_KEY
			}`
		)
		.then(
			res => {
				commit('SET_RAW_DATA', res.data);
			},
			err => {
				console.log('ERROR: ', err);
			}
		);
};

export default {
	LOAD_TABLE,
	LOAD_COLUMNS,
	LOAD_EUR,
	LOAD_XAF,
	LOAD_TREEMAP,
	LOAD_CLEAN_TREE,
	LOAD_TREES,
	GET_RAW_DATA,
};
