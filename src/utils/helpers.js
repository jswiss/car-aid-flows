function excelToJsDate(excelDate) {
	return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
}

export { excelToJsDate };
