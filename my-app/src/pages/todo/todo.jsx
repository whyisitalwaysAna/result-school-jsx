import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DB_URLS } from '../../constants';
import { readData } from '../../api';
import { TodoLayout } from './todo-layout';

export const Todo = () => {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		readData(`${DB_URLS.MAIN}/${id}`)
			.then((data) => {
				if (data.id === undefined) {
					navigate('/404');
					return;
				} else {
					setTitle(data.title);
				}
			})
			.catch((error) =>
				console.error(
					`${'Response from database received with an error'}: ${error.message}`,
				),
			);
	}, [id, navigate, isEdit]);

	const props = {
		navigate,
		isEdit,
		setIsEdit,
		id,
		title,
		setTitle,
	};

	return <TodoLayout {...props} />;
};
