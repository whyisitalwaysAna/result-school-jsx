import { ERROR_MESSAGE } from '../constants';

export const validateInput = (getState, setError) => {
	const passwordStrength = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(
		getState.password,
	);
	const passwordsMatch = getState.password === getState.repeatPassword;
	const minPasswordLength = getState.password.length >= 5;
	const maxPasswordLength = getState.password.length <= 20;

	if (!minPasswordLength) {
		setError(ERROR_MESSAGE.minPasswordLength);
		return false;
	}

	if (!maxPasswordLength) {
		setError(ERROR_MESSAGE.maxPasswordLength);
		return false;
	}

	if (!passwordStrength) {
		setError(ERROR_MESSAGE.passwordStrength);
		return false;
	}

	if (!passwordsMatch) {
		setError(ERROR_MESSAGE.passwordMatch);
		return false;
	}

	return true;
};
