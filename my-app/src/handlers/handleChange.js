export const handleChange = ({ target }, getState, updateState, sumbitButtonRef) => {
	const passwordsMatch =
		getState.password.length === getState.repeatPassword.length + 1;

	if (passwordsMatch && target.name === 'repeatPassword') {
		
		console.log(getState.password.length, 'pass');
		console.log(getState.repeatPassword.length + 1, 'repeat');
		console.log(sumbitButtonRef.current);
		console.log(passwordsMatch, 'Условие сработало!');

		sumbitButtonRef.current.focus();
	}

	updateState(target.name, target.value);
};
