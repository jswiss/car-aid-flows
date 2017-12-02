function reduceObj(arr, obj) {
	for (let i = 0; i < arr.length; i++) {
		if (Object.keys(obj).includes(arr[i])) {
			this.cleaned[arr[i]] = obj[arr[i]];
		}
	}
}

function excelToJsDate(excelDate) {
	return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
}

const projectTable = [];

export { reduceObj, excelToJsDate };
