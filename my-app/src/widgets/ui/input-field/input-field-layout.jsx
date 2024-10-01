import styles from './input-field.module.css';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import { Button, Input } from '../../../shared';

export const InputFieldLayout = ({
	submitHandler,
	placeholder,
	value,
	handleChange,
	buttonTitle,
}) => {
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label className={styles.label}>
				<Input
					type='search'
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
				/>
				<PiMagnifyingGlassThin className={styles.glass} />
			</label>
			<Button className={styles.formButton} type='submit'>{buttonTitle}</Button>
		</form>
	);
};
