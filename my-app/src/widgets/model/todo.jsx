import { TodoLayout } from '../';
import { DB_URL, changeTodos } from '../../shared';

export const Todo = ({
	id,
	isChecked,
	title,
	setLoadingFlag,
	setEditedFieldId,
	...props
}) => {
	const checkTodoInDatabase = (e) => {
		e.preventDefault();

		changeTodos(
			`${DB_URL}/${id}`,
			'PATCH',
			{
				checked: !isChecked,
			},
			'Failed to check todo',
			[setLoadingFlag(true)],
		);
	};

	const deleteTodoFromDatabase = (e) => {
		e.preventDefault();

		changeTodos(`${DB_URL}/${id}`, 'DELETE', {}, 'Failed to delete todo', [
			setLoadingFlag(true),
		]);
	};

	return (
		<TodoLayout
			id={id}
			isChecked={isChecked}
			handleChange={(e) => checkTodoInDatabase(e)}
			title={title}
			handleEditClick={() => setEditedFieldId(id)}
			handleDeleteClick={(e) => deleteTodoFromDatabase(e)}
		/>
	);
};
