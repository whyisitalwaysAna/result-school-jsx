import { findDraw, findWinner } from '../utils';

export const handleSquareClick = (state, index) => {
	const {
		isGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		currentPlayer,
		setCurrentPlayer,
		setIsGameEnded,
	} = state;

	if (isGameEnded || isDraw || field[index].symbol) return;

	// Рендер Х и О по клику
	setField((prev) => {
		prev[index].symbol = currentPlayer;
		return [...prev];
	});

	switch (currentPlayer) {
		case 'x':
			setCurrentPlayer((player) => {
				if (findWinner(field) || findDraw(field, setIsDraw)) {
					setIsGameEnded(true);
					return player;
				}
				return (player = 'o');
			});
			break;
		case 'o':
			setCurrentPlayer((player) => {
				if (findWinner(field) || findDraw(field, setIsDraw)) {
					setIsGameEnded(true);
					return player;
				}
				return (player = 'x');
			});
			break;
		default: // Ничего не делаем
	}
};
