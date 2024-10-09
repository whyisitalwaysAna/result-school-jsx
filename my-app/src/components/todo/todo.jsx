import styles from './todo.module.css';
import { Link } from 'react-router-dom';
import { checkTodo } from '../../utils';

export const Todo = ({ id, checked, title, setLoadingFlag }) => {
	return (
		<div className={styles.todoContainer}>
			<label className={styles.todoLabel} htmlFor={id}>
				<input type='checkbox' id={id} checked={checked} onChange={() => {}} />
				<span
					className={styles.customCheckbox}
					onClick={(e) => checkTodo(e, id, checked, setLoadingFlag)}
				></span>
				<Link
					to={`/todo/${id}`}
					className={checked ? styles.checkedTitle : styles.title}
				>
					{title}
				</Link>
			</label>
		</div>
	);
};
