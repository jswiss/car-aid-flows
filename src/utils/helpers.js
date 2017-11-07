function reduceObj(arr, obj) {
	arr.forEach(key => {
		delete obj[!key];
		return obj;
	});
}

export default { reduceObj };
