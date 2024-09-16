import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ isGameEnded, isDraw, currentPlayer }) => {
	let information = `Ход игрока (${currentPlayer})`;

	if (isGameEnded) {
		information = `Победитель: (${currentPlayer})!`;
	} else if (isDraw) {
		information = `Ничья!`;
	}

	return <InformationLayout information={information} />;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
