import { useEffect, useState } from 'react';
import { TodoAppLayout } from './TodoAppLayout';
import { fetchTodos } from './shared';
import { DB_URL } from './shared';
import { AppContext } from './context';

export const TodoApp = () => {
	const [todosData, setTodosData] = useState([]);
	const [loadingFlag, setLoadingFlag] = useState(false);
	const [editedFieldId, setEditedFieldId] = useState('');

	useEffect(() => {
		fetchTodos(DB_URL)
			.then((data) => {
				setTodosData(data);
			})
			.catch((error) =>
				console.error(
					`${'Response from database received with an error'}: ${error.message}`,
				),
			);

		setLoadingFlag(false);
	}, [loadingFlag]);

	const value = {
		setTodosData,
		setLoadingFlag,
		editedFieldId,
		setEditedFieldId,
	};

	return (
		<AppContext.Provider value={value}>
			<TodoAppLayout todosData={todosData} editedFieldId={editedFieldId} />
		</AppContext.Provider>
	);
};
