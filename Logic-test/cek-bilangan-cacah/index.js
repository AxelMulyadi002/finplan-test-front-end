const checkNumbers = (...numbers) => {
	const removeNegatifNumber = numbers.filter((num) => num > 0);

	if (removeNegatifNumber.length === 0) {
		return 1;
	}

	let smallNumber = removeNegatifNumber.length;

	for (let i = 0; i < removeNegatifNumber.length; i++) {
		const index = Math.abs(removeNegatifNumber[i]) - 1;
		if (index < removeNegatifNumber.length) {
			removeNegatifNumber[index] = -Math.abs(removeNegatifNumber[index]);
		}
	}

	for (let i = 0; i < removeNegatifNumber.length; i++) {
		if (removeNegatifNumber[i] > 0) {
			smallNumber = i + 1;
			break;
		}
	}

	return smallNumber;
};

console.log(checkNumbers(1, 2, 4, 5, 6));
