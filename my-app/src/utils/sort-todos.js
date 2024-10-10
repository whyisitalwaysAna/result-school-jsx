import { DB_URLS } from '../constants';
import { readData } from '../api';

export const sortTodos = (sortFlag, setTodosData) => {
	const { MAIN, SORT_ASC, SORT_DESC } = DB_URLS;
	const sortOrder = sortFlag ? SORT_ASC : SORT_DESC;

	readData(`${MAIN}${sortOrder}`)
		.then((data) => {
			setTodosData(data);
		})
		.catch((error) => console.error(`${'Failed to sort todos'}: ${error.message}`));
};
