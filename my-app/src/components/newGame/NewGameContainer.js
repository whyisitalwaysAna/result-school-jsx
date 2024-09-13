import PropTypes from 'prop-types';

export const NewGameContainer = (state) => {
	state.setCurrentPlayer('x');
	state.setIsGameEnded(false);
	state.setIsDraw(false);
	state.setField(state.fieldInitial);
};

NewGameContainer.propTypes = {
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
