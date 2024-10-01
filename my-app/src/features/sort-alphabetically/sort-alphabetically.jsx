import { useState } from 'react';
import styles from './sort-alphabetically.module.css';
import { FaSortAlphaDown } from 'react-icons/fa';
import { Button, fetchTodos } from '../../shared';
import { DB_URL, SORT_URL } from '../../shared/constants';

export const SortAlphabetically = ({ setLoadingFlag, setTodosData }) => {
	const [sortedFlag, setSortedFlag] = useState(false);

	const sortDataAlphabetically = (setLoadingFlag, setTodosData) => {
		setSortedFlag(!sortedFlag);

		if (sortedFlag) {
			setLoadingFlag(true);
		} else {
			fetchTodos(`${DB_URL}${SORT_URL}`, setTodosData, 'Failed to sort todos');
		}
	};

	return (
		<Button
			className={
				sortedFlag
					? `${styles.sortAlphabetically} ${styles.sortAlphabeticallyActive}`
					: styles.sortAlphabetically
			}
			type='button'
			onClick={() => sortDataAlphabetically(setLoadingFlag, setTodosData)}
		>
			<FaSortAlphaDown className={styles.sortAlphabeticallyIcon} />
		</Button>
	);
};
