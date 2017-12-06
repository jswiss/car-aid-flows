const getRaw = state => state.rawData;
const tableData = state => state.tableData;
const tableColumns = state => state.tableColumns;
const xafTableData = state => state.xafTable;
const eurTableData = state => state.eurTable;
const treeYear = state => state.treemapYear;
const treemap = state => state.treemap;
const tree2017 = state => state.tree2017;

export default {
	tableData,
	tableColumns,
	xafTableData,
	eurTableData,
	treeYear,
	treemap,
	tree2017,
	getRaw,
};
