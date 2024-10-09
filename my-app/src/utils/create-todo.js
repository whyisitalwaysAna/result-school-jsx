import { DB_URLS } from '../constants';

export const createTodo = (e, todoTitle, setTodoTitle) => {
	e.preventDefault();

	if (todoTitle === '') return;

	fetch(DB_URLS.MAIN, {
		method: 'POST',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			id: Date.now(),
			title: todoTitle,
			checked: false,
		}),
	})
		.then(() => setTodoTitle(''))
		.catch((error) => console.error(`Failed to add todo: ${error.message}`));
};
