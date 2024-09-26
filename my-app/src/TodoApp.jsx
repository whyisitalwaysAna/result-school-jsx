import { useEffect, useState } from 'react';
import { TodoLayout } from './TodoLayout';

export const TodoApp = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => setTodos(json.filter((o, index) => index < 20)))
			.finally(() => setIsLoading(false));
	}, []);

	return <TodoLayout isLoading={isLoading} todos={todos} />;
};
