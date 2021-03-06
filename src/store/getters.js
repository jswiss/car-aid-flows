const getRaw = state => state.rawData;
const getMap = state => state.mapData;
const tableData = state => state.tableData;
const tableColumns = state => state.tableColumns;
const xafTableData = state => state.xafTable;
const eurTableData = state => state.eurTable;
const treeYear = state => state.treemapYear;
const treemap = state => state.treemap;
const tree2017 = state => state.tree2017;
const tree2018 = state => state.tree2018;
const tree2019 = state => state.tree2019;
const budgetSupport = state => state.budgetSupport;
const disbursementRate = state => state.disbursementRate;

export default {
	tableData,
	tableColumns,
	xafTableData,
	eurTableData,
	treeYear,
	treemap,
	tree2017,
	tree2018,
	tree2019,
	budgetSupport,
	getRaw,
	getMap,
	disbursementRate,
};
