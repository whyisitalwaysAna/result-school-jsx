import { DB_URLS } from '../constants';

export const updateTodo = (e, id, title) => {
	e.preventDefault();

	fetch(`${DB_URLS.MAIN}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: id,
			title: title,
		}),
	}).catch((error) => console.error(`Failed to update todo: ${error.message}`));
};
