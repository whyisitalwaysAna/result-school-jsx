import { DB_URLS } from '../constants';

export const deleteTodo = (e, id, navigate) => {
	e.preventDefault();

	fetch(`${DB_URLS.MAIN}/${id}`, {
		method: 'DELETE',
	})
		.then(() => navigate('/'))
		.catch((error) => console.error(`Failed to delete todo: ${error.message}`));
};
