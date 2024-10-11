import { useState, useContext } from 'react';
import styles from './sort-alphabetically.module.css';
import { FaSortAlphaDown } from 'react-icons/fa';
import { Button, fetchTodos } from '../../shared';
import { DB_URL, SORT_ASC, SORT_DESC } from '../../shared/constants';
import { AppContext } from '../../context';

export const SortAlphabetically = () => {
	const [sortedFlag, setSortedFlag] = useState(false);
	const { setTodosData } = useContext(AppContext);
	const sortOrder = sortedFlag ? SORT_DESC : SORT_ASC;

	const sortDataAlphabetically = () => {
		setSortedFlag(!sortedFlag);

		fetchTodos(`${DB_URL}${sortOrder}`)
			.then((data) => {
				setTodosData(data);
			})
			.catch((error) =>
				console.error(`${'Failed to sort todos'}: ${error.message}`),
			);
	};

	return (
		<Button
			className={
				sortedFlag
					? `${styles.sortAlphabetically} ${styles.sortAlphabeticallyActive}`
					: styles.sortAlphabetically
			}
			type='button'
			onClick={sortDataAlphabetically}
		>
			<FaSortAlphaDown className={styles.sortAlphabeticallyIcon} />
		</Button>
	);
};
