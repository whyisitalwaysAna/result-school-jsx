import styles from './empty-field-icon.module.css';

export const EmptyFieldIcon = ({ children }) => {
	return (
		<div className={styles.emptyFieldIcon}>
			<img
				src={`${process.env.PUBLIC_URL}/emptyListIcon.svg`}
				alt='empty-list-icon'
			/>
			<span>{children}</span>
		</div>
	);
};
