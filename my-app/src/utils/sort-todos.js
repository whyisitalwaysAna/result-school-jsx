import { DB_URLS } from '../constants';

export const sortTodos = (sortedFlag, setTodosData) => {
	const { MAIN, SORT_ASC, SORT_DESC } = DB_URLS;
	const sortOrder = sortedFlag ? SORT_DESC : SORT_ASC;

	fetch(`${MAIN}${sortOrder}`)
		.then((response) => response.json())
		.then((data) => {
			setTodosData(data);
		})
		.catch((error) => console.error(`${'Failed to sort todos'}: ${error.message}`));
};
