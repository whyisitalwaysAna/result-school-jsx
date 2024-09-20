import { VALIDATE_RULES, VALIDATE_SCHEMA } from '../constants';

export const handleSubmit = (e, state, validate, setError, sendData) => {
	e.preventDefault();

	const hasError = validate(state, VALIDATE_SCHEMA, VALIDATE_RULES);
	const isValueEmpty = state.some((input) => input.value === '');

	if (isValueEmpty) {
		setError(['Заполните все поля']);
	} else if (hasError.length > 0) {
		setError([...hasError]);
	} else {
		sendData(state);
	}
};
