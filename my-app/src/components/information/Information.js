import s from './Information.module.css';
import { useSelector } from 'react-redux';
import { findWinner } from '../../utils';
import {
	selectCurrentPlayer,
	selectField,
	selectGameDraw,
	selectGameOver,
} from '../../selectors';

export const Information = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameOver = useSelector(selectGameOver);
	const isDraw = useSelector(selectGameDraw);

	let information = `Ход игрока (${currentPlayer})`;

	if (isGameOver) {
		information = `Победитель: (${findWinner(field)})!`;
	} else if (isDraw) {
		information = `Ничья!`;
	}

	return <div className={s.header}>{information}</div>;
};
