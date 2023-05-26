const bilanganCacah = (n, kelipatan) => {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % kelipatan === 0) {
			arr.push('Z');
		} else if (i % kelipatan === 0) {
			arr.push('Z');
		} else {
			arr.push(i * kelipatan);
		}
	}
	console.log(arr);
};

bilanganCacah(13, 3);
