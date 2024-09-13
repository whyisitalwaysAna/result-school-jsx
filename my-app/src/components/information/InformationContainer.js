import PropTypes from 'prop-types';

export const InformationContainer = (state) => {
	if (state.isDraw) return `Ничья!`;

	return state.isGameEnded
		? `Победитель: (${state.currentPlayer})!`
		: `Ход игрока (${state.currentPlayer})`;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
