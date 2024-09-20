import { VALIDATE_RULES, VALIDATE_SCHEMA } from '../constants';

export const handleBlur = (validate, state, setError) => {
	const hasError = validate(state, VALIDATE_SCHEMA, VALIDATE_RULES);

	const isValueEmpty = state.some((input) => input.value === '');
	if (isValueEmpty) {
		return;
	} else {
		setError([...hasError]);
	}
};
