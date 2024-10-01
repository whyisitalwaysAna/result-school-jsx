import styles from './input.module.css';

export const Input = ({ className, type, ...props }) => {
	return <input className={`${styles.input} ${className}`} type={type} {...props} />;
};
