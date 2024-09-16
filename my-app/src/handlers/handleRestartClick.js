export const handleRestartClick = (state) => {
	state.setCurrentPlayer('x');
	state.setIsGameEnded(false);
	state.setIsDraw(false);
	state.setField(state.createEmptyField());
};
