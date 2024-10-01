import styles from './editing-window.module.css';
import { ImCheckmark } from 'react-icons/im';
import { Input } from '../../../shared';

export const EditingWindowLayout = ({
	editedFieldId,
	isChecked,
	newFieldTitle,
	handleChange,
	handleChangeTitleClick,
}) => {
	return (
		<div className={styles.container}>
			<Input
				className={styles.text}
				type='text'
				id={editedFieldId}
				checked={isChecked}
				value={newFieldTitle}
				onChange={handleChange}
			/>
			<ImCheckmark className={styles.checkmark} onClick={handleChangeTitleClick} />
		</div>
	);
};
