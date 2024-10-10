import { DB_URLS } from '../constants';

export const updateTodo = (e, id, title, setIsEdit) => {
	e.preventDefault();
	setIsEdit(true);

	fetch(`${DB_URLS.MAIN}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: id,
			title: title,
		}),
	})
		.then(() => {
			setIsEdit(false);
		})
		.catch((error) => console.error(`Failed to update todo: ${error.message}`));
};
