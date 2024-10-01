import styles from './button.module.css';

export const Button = ({ children, className, type, ...props }) => {
	return (
		<button className={`${styles.button} ${className}`} type={type} {...props}>
			{children}
		</button>
	);
};
