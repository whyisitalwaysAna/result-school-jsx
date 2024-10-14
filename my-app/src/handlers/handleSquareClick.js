import { store } from '../reducer';

export const handleSquareClick = (index) => {
	const { isGameOver, isDraw, field } = store.getState();

	if (isGameOver || isDraw || field[index].symbol) return;

	store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: index });
};
