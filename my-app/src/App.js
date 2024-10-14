import s from './App.module.css';
import { useState, useEffect } from 'react';
import { Field } from './components/field';
import { Information } from './components/information';
import { handleRestartClick } from './handlers';
import { store } from './reducer';

export const App = () => {
	const [_, setRender] = useState(0);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setRender((prev) => prev + 1));

		return () => unsubscribe;
	}, []);

	return (
		<>
			<button className={s.restart} onClick={() => handleRestartClick()}>
				Начать заново
			</button>
			<Information />
			<Field />
		</>
	);
};
