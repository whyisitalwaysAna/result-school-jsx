import s from './Information.module.css';
import { store } from '../../reducer';
import { findWinner } from '../../utils';

export const Information = () => {
	const { currentPlayer, isGameOver, isDraw, field } = store.getState();

	let information = `Ход игрока (${currentPlayer})`;

	if (isGameOver) {
		information = `Победитель: (${findWinner(field)})!`;
	} else if (isDraw) {
		information = `Ничья!`;
	}

	return <div className={s.header}>{information}</div>;
};
