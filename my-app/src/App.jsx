import { useState, useRef } from 'react';
import { AppLayout } from './AppLayout';
import { handleSubmit, handleChange, handleBlur } from './handlers';
import { useStore } from './hooks';

export const App = () => {
	const { getState, updateState } = useStore();
	const [error, setError] = useState(' ');
	const sumbitButtonRef = useRef(null);

	return (
		<AppLayout
			sumbitButtonRef={sumbitButtonRef}
			error={error}
			getState={getState}
			handleSubmit={(event) => handleSubmit(event, getState, setError)}
			handleChange={(event) =>
				handleChange(event, getState, updateState, sumbitButtonRef)
			}
			handleBlur={() => handleBlur(getState, setError)}
		/>
	);
};
