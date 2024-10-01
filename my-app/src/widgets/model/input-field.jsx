import { useEffect, useState } from 'react';
import { InputFieldLayout } from '../';
import { DB_URL, changeTodos, fetchTodos } from '../../shared';

export const InputField = ({ setTodosData, setLoadingFlag }) => {
	const [todoTitle, setTodoTitle] = useState('');

	const addTodoToDatabase = (e) => {
		e.preventDefault();

		if (!todoTitle) return;

		changeTodos(
			DB_URL,
			'POST',
			{
				id: Date.now(),
				title: todoTitle,
				checked: false,
			},
			'Failed to add todo',
			[setLoadingFlag(true), setTodoTitle('')],
		);
	};

	useEffect(() => {
		fetchTodos(`${DB_URL}?q=${todoTitle}`, setTodosData, 'Failed to search todo');
	}, [todoTitle]);

	return (
		<InputFieldLayout
			submitHandler={(e) => addTodoToDatabase(e)}
			placeholder='Search or create todo...'
			value={todoTitle}
			handleChange={(e) => setTodoTitle(e.target.value)}
			buttonTitle='Create todo'
		/>
	);
};
