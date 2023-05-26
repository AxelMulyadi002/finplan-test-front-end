const checkPassword = (password) => {
	const minimumLength = 8;
	const maximumLength = 32;
	const Firstletter = /^[^0-9]/.test(password);
	const capitalLetter = /[A-Z]/.test(password);
	const normalLetter = /[a-z]/.test(password);
	const containsNumber = /[0-9]/.test(password);

	if (
		password.length >= minimumLength &&
		password.length <= maximumLength &&
		Firstletter &&
		capitalLetter &&
		normalLetter &&
		containsNumber
	) {
		console.log('kata sandi valid');
	} else {
		console.log('kata sandi tidak valid');
	}
};

checkPassword('Sandiwar48');
