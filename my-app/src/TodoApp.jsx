import styles from './Todo.module.css';
import { useRoutes } from 'react-router-dom';
import { Main, NotFound, Todo } from './pages';

export const TodoApp = () => {
	const routes = useRoutes([
		{ path: '/', element: <Main /> },
		{ path: '/todo/:id', element: <Todo /> },
		{ path: '/404', element: <NotFound /> },
		{ path: '*', element: <NotFound /> },
	]);

	return <div className={styles.todoAppContainer}>{routes}</div>;
};
