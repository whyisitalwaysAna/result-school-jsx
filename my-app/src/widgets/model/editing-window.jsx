import { EditingWindowLayout } from '../';
import { useState, useContext } from 'react';
import { DB_URL, changeTodos } from '../../shared';
import { AppContext } from '../../context';

export const EditingWindow = ({ checked, ...props }) => {
	const [newTitle, setNewTitle] = useState('');
	const { editedFieldId, setLoadingFlag, setEditedFieldId } = useContext(AppContext);

	const changeTodoTitleInDatabase = (e) => {
		e.preventDefault();

		if (!newTitle) {
			setLoadingFlag(true);
			setEditedFieldId('');
			return;
		}

		changeTodos(
			`${DB_URL}/${editedFieldId}`,
			'PATCH',
			{
				id: editedFieldId,
				title: newTitle,
			},
			'Failed to change todo',
			[setLoadingFlag(true), setNewTitle(''), setEditedFieldId('')],
		);
	};

	return (
		<EditingWindowLayout
			editedFieldId={editedFieldId}
			isChecked={checked}
			newFieldTitle={newTitle}
			handleChange={(e) => setNewTitle(e.target.value)}
			handleChangeTitleClick={(e) => changeTodoTitleInDatabase(e)}
		/>
	);
};
