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
const AidViaFunds = resolve =>
	require(['../components/charts/AidViaFunds.vue'], resolve);
const AidByNdpPillar = resolve =>
	require(['../components/charts/AidByNdpPillar.vue'], resolve);
const AidOnTreasury = resolve =>
	require(['../components/charts/AidOnTreasury.vue'], resolve);
const Project = resolve =>
	require(['../components/projects/Project.vue'], resolve);

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
		// children: [
		// 	{
		// 		path: '/aid-table',
		// 		name: 'AidTable',
		// 		component: AidTable,
		// 	},
		// ],
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
				path: 'aid-via-funds',
				name: 'AidViaFunds',
				component: AidViaFunds,
			},
			{
				path: 'aid-by-ndp-pillar',
				name: 'AidByNdpPillar',
				component: AidByNdpPillar,
			},
			{
				path: 'aid-on-treasury',
				name: 'AidOnTreasury',
				component: AidOnTreasury,
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
