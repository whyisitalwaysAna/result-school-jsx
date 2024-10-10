import styles from './todo.module.css';
import { PiPencilSimpleLight } from 'react-icons/pi';
import { GoTrash } from 'react-icons/go';
import { ImCheckmark } from 'react-icons/im';
import { updateTodo, deleteTodo } from '../../utils';
import { GoBack } from '../../components';

export const TodoLayout = ({ navigate, isEdit, setIsEdit, id, title, setTitle }) => {
	return (
		<>
			<nav className={styles.navigation}>
				<GoBack />
				{isEdit ? (
					<ImCheckmark
						className={styles.checkmark}
						onClick={(e) => {
							updateTodo(e, id, title, setIsEdit);
						}}
					/>
				) : (
					<PiPencilSimpleLight
						onClick={() => setIsEdit(true)}
						className={styles.pencil}
					/>
				)}
				<GoTrash
					onClick={(e) => deleteTodo(e, id, navigate)}
					className={styles.trash}
				/>
			</nav>
			<div className={styles.container}>
				{isEdit ? (
					<textarea
						className={styles.text}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></textarea>
				) : (
					<p className={styles.text}>{title}</p>
				)}
			</div>
		</>
	);
};
