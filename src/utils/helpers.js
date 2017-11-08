function reduceObj(arr, obj) {
	for (let i = 0; i < arr.length; i++) {
		if (Object.keys(obj).includes(arr[i])) {
			this.cleaned[arr[i]] = obj[arr[i]];
		}
	}
}

const projectTable = [];

export { reduceObj };
