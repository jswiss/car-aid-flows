import Vue from 'vue';
import Router from 'vue-router';
const Home = resolve => require(['../components/Home.vue'], resolve);
const About = resolve => require(['../components/about/About.vue'], resolve);
const Tables = resolve => require(['../components/tables/Tables.vue'], resolve);
// const AidTable = resolve =>
// require(['../components/tables/AidTable.vue'], resolve);
const Charts = resolve => require(['../components/charts/Charts.vue'], resolve);
const PillarCountChart = resolve =>
	require(['../components/charts/PillarCountChart.vue'], resolve);
const PillarsComponents2017 = resolve =>
	require(['../components/charts/PillarsComponents2017.vue'], resolve);
const TreeMap2017 = resolve =>
	require(['../components/charts/TreeMap2017.vue'], resolve);
const TreeMap2018 = resolve =>
	require(['../components/charts/TreeMap2018.vue'], resolve);
const TreeMap2019 = resolve =>
	require(['../components/charts/TreeMap2019.vue'], resolve);
const BudgetSupport = resolve =>
	require(['../components/charts/BudgetSupport.vue'], resolve);
const Project = resolve =>
	require(['../components/projects/Project.vue'], resolve);
const DisbursementRate = resolve =>
	require(['../components/charts/DisbursementRate.vue'], resolve);
const ProjectMap = resolve =>
	require(['../components/charts/ProjectMap.vue'], resolve);

import store from '../store';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/table',
		name: 'Tables',
		component: Tables,
		beforeRouteEnter: (to, from, next) => {
			store.dispatch('LOAD_RAW');
			next();
		},
		beforeUpdate: (to, from, next) => {
			store.dispatch('LOAD_RAW');
			next();
		},
	},
	{
		path: '/charts',
		name: 'Charts',
		component: Charts,
		children: [
			{
				path: 'pillar-count-chart',
				name: 'PillarCountChart',
				component: PillarCountChart,
			},
			{
				path: 'pillars-components-2017',
				name: 'PillarsComponents2017',
				component: PillarsComponents2017,
			},
			{
				path: 'treemap-2017',
				name: 'TreeMap2017',
				component: TreeMap2017,
			},
			{
				path: 'treemap-2018',
				name: 'TreeMap2018',
				component: TreeMap2018,
			},
			{
				path: 'treemap-2019',
				name: 'TreeMap2019',
				component: TreeMap2019,
			},
			{
				path: 'budget-support',
				name: 'BudgetSupport',
				component: BudgetSupport,
			},
			{
				path: 'disbursement-rate',
				name: 'DisbursementRate',
				component: DisbursementRate,
			},
			{
				path: 'project-map',
				name: 'ProjectMap',
				component: ProjectMap,
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/projects/:projectName',
		name: 'project',
		component: Project,
	},
];

export default new Router({
	mode: 'history',
	routes: routes,
	linkActiveClass: 'is-active',
});
