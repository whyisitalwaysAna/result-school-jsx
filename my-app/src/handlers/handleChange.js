export const handleChange = (
	{ target },
	getState,
	updateState,
	sumbitButtonRef,
	setError,
) => {
	const passwordsMatch =
		getState.password.length === getState.repeatPassword.length + 1;

	if (passwordsMatch && target.name === 'repeatPassword') {
		console.log(passwordsMatch, 'Условие сработало!');

		sumbitButtonRef.current.focus();
		setError(null);
	}

	updateState(target.name, target.value);
};
