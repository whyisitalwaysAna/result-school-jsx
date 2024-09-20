import { useState, useRef, useEffect } from 'react';
import { AppLayout } from './AppLayout';
import { useStore } from './hooks';
import { sendData, validate } from './utils';
import { handleChange, handleSubmit, handleBlur } from './handlers';

export const App = () => {
	const buttonRef = useRef(null);
	const { state, updateState } = useStore();
	const [error, setError] = useState(true);

	useEffect(() => {
		const password = state.find((input) => input.name === 'password');
		const repeatPassword = state.find((input) => input.name === 'repeatPassword');

		if (password.value === repeatPassword.value) {
			buttonRef.current.focus();
		}
	}, [state]);

	return (
		<AppLayout
			error={error}
			state={state}
			handleChange={(e) => handleChange(e, updateState)}
			handleSubmit={(e) =>
				handleSubmit(e, state, validate, setError, sendData, state)
			}
			handleBlur={() => handleBlur(validate, state, setError)}
			buttonRef={buttonRef}
		/>
	);
};
