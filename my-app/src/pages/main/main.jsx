import { useEffect, useState } from 'react';
import { DB_URLS } from '../../constants';
import { readData } from '../../api';
import { MainLayout } from './mainLayout';

export const Main = () => {
	const [todosData, setTodosData] = useState([]);
	const [loadingFlag, setLoadingFlag] = useState(false);
	const [todoTitle, setTodoTitle] = useState('');
	const [sortFlag, setSortFlag] = useState(false);

	// Search todo
	useEffect(() => {
		readData(`${DB_URLS.MAIN}?q=${todoTitle}`)
			.then((data) => {
				setTodosData(data);
			})
			.catch((error) =>
				console.error(`${'Failed to search todo'}: ${error.message}`),
			);
	}, [todoTitle]);

	// Read todos data
	useEffect(() => {
		readData(DB_URLS.MAIN)
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

	const props = {
		todosData,
		setTodosData,
		todoTitle,
		setTodoTitle,
		sortFlag,
		setSortFlag,
		setLoadingFlag,
	};

	return <MainLayout {...props} />;
};
