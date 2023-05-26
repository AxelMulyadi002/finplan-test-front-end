const createPattern = (N) => {
	if (N % 2 !== 1) {
		console.log('Input harus merupakan bilangan ganjil');
		return;
	}

	for (let i = 1; i <= N; i++) {
		let row = '';
		for (let j = 1; j <= N; j++) {
			if (i === 1 || i === N) {
				row += 'X';
			} else {
				if (j % 2 === 1) {
					row += 'X';
				} else {
					row += 'O';
				}
			}
		}
		console.log(row);
	}
};

createPattern(5);
