import { useContext, useEffect, useState } from 'react';
import { InputFieldLayout } from '../';
import { DB_URL, changeTodos, fetchTodos } from '../../shared';
import { AppContext } from '../../context';

export const InputField = () => {
	const [todoTitle, setTodoTitle] = useState('');
	const { setTodosData, setLoadingFlag } = useContext(AppContext);

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
		fetchTodos(`${DB_URL}?q=${todoTitle}`)
			.then((data) => {
				setTodosData(data);
			})
			.catch((error) =>
				console.error(`${'Failed to search todo'}: ${error.message}`),
			);
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
