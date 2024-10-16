import s from './App.module.css';
import { Field } from './components/field';
import { Information } from './components/information';
import { useDispatch } from 'react-redux';
import { SET_NEW_GAME } from './actions';

export const App = () => {
	const dispatch = useDispatch();

	const handleRestartClick = () => {
		dispatch(SET_NEW_GAME);
	};

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
