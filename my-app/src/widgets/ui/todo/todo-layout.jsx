import styles from './todo.module.css';
import { PiPencilSimpleLight } from 'react-icons/pi';
import { GoTrash } from 'react-icons/go';
import { Input } from '../../../shared';

export const TodoLayout = ({
	id,
	isChecked,
	handleChange,
	title,
	handleEditClick,
	handleDeleteClick,
}) => {
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={id}>
				<Input
					type='checkbox'
					id={id}
					checked={isChecked}
					onChange={handleChange}
				/>
				<span className={styles.customCheckbox}></span>
				<span className={isChecked ? styles.checked : ''}>{title}</span>
			</label>
			<PiPencilSimpleLight onClick={handleEditClick} className={styles.pencil} />

			<GoTrash onClick={handleDeleteClick} className={styles.trash} />
		</div>
	);
};
