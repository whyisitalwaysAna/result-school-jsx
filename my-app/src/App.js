import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setValueValid] = useState(true);

	function onInputButtonClick() {
		let promptValue = prompt('Введите значение', '');

		if (promptValue.length < 3) {
			setValue('');
			setError('Введенное значение должно содержать минимум 3 символа');
			return;
		}

		setValueValid(!isValueValid);
		setValue(promptValue);
		setError('');
	}

	function onAddButtonClick() {
		if (value === '') return;

		const today = Date.now();

		const dateFormatter = new Intl.DateTimeFormat('ru', {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		});

		setValueValid(!isValueValid);
		setValue('');
		setError('');

		setList((l) => {
			return [
				...list,
				{
					id: today,
					value: value,
					creationTime: dateFormatter.format(today),
				},
			];
		});
	}

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={isValueValid}
					onClick={onAddButtonClick}
				>
					{' '}
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map((elem) => {
							return (
								<li key={elem.id} className={styles['list-item']}>
									{elem.value}: {elem.creationTime}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
