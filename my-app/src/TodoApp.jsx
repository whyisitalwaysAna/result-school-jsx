import { useEffect, useState } from 'react';
import { TodoAppLayout } from './TodoAppLayout';
import { fetchTodos } from './shared';
import { DB_URL } from './shared';

export const TodoApp = () => {
	const [todosData, setTodosData] = useState([]);
	const [loadingFlag, setLoadingFlag] = useState(false);
	const [editedFieldId, setEditedFieldId] = useState('');

	useEffect(() => {
		fetchTodos(DB_URL, setTodosData, 'Response from database received with an error');
		setLoadingFlag(false);
	}, [loadingFlag]);

	return (
		<TodoAppLayout
			setTodosData={setTodosData}
			setLoadingFlag={setLoadingFlag}
			todosData={todosData}
			editedFieldId={editedFieldId}
			setEditedFieldId={setEditedFieldId}
		/>
	);
};
