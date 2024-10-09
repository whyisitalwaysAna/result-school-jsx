import styles from './go-back.module.css';
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export const GoBack = () => {
	const navigate = useNavigate();

	return (
		<TiArrowBack className={styles.goBack} onClick={() => navigate('/')} />
	);
};
