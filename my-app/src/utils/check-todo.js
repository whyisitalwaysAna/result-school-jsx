import { DB_URLS } from '../constants';

export const checkTodo = (e, id, checked, setLoadingFlag) => {
	e.preventDefault();

	fetch(`${DB_URLS.MAIN}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			checked: !checked,
		}),
	})
		.then(setLoadingFlag(true))
		.catch((error) => console.error(`Failed to check todo: ${error.message}`));
};
