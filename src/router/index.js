import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('../components/Home.vue');
const About = () => import('../components/about/About.vue');
const Tables = () => import('../components/tables/Tables.vue');
// const AidTable = () =>
// import('../components/tables/AidTable.vue');
const Charts = () => import('../components/charts/Charts.vue');
const PillarCountChart = () =>
	import('../components/charts/PillarCountChart.vue');
const PillarsComponents2017 = () =>
	import('../components/charts/PillarsComponents2017.vue');
const TreeMap2017 = () => import('../components/charts/TreeMap2017.vue');
const BudgetSupport = () => import('../components/charts/BudgetSupport.vue');
const Project = () => import('../components/projects/Project.vue');
const DisbursementRate = () =>
	import('../components/charts/DisbursementRate.vue');
const NeedsCoverage = () => import('../components/charts/NeedsCoverage.vue');
const DocsRcpca = () => import('../components/DocsRcpca.vue');

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
				path: 'needs-coverage',
				name: 'NeedsCoverage',
				component: NeedsCoverage,
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/documents-rcpca',
		name: 'DocsRcpca',
		component: DocsRcpca,
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
