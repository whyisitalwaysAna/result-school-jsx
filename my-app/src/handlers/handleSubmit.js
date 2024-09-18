import { sendData } from '../utils';
import { validateInput } from '../utils';

export const handleSubmit = (event, getState, setError) => {
	event.preventDefault();

	if (validateInput(getState, setError)) {
		sendData(getState);
	}
};
