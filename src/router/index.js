import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/about/About';
import Tables from '@/components/tables/Tables';
import AidTable from '@/components/tables/AidTable';
import Charts from '@/components/charts/Charts';
import PillarCountChart from '@/components/charts/PillarCountChart';
import PillarsComponents2017 from '@/components/charts/PillarsComponents2017';
import AidLocationChart from '@/components/charts/AidLocationChart';
import AidViaFunds from '@/components/charts/AidViaFunds';
import AidByNdpPillar from '@/components/charts/AidByNdpPillar';
import AidOnTreasury from '@/components/charts/AidOnTreasury';
import Project from '@/components/projects/Project';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables,
		children: [
			{
				path: "/table-de-flux-d'aide",
				name: 'AidTable',
				component: AidTable,
			},
		],
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
				path: 'aid-location',
				name: 'AidLocationChart',
				component: AidLocationChart,
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
	routes,
	linkActiveClass: 'is-active',
});
