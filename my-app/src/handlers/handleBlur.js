export const handleBlur = (getState, setError) => {
	const values = Object.values(getState);

	const isValueEmpty = values.some((value) => {
		return value === '';
	});

	const emailCorrect = getState.email.includes('@');

	if (!emailCorrect) {
		setError('Введите корректную почту');
		return;
	}

	if (isValueEmpty) {
		setError(' ');
	} else {
		setError(null);
	}
};
