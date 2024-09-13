import s from './newGame.module.css';

function NewGameContainer(state) {
	state.setCurrentPlayer('x');
	state.setIsGameEnded(false);
	state.setIsDraw(false);
	state.setField(state.fieldInitial);
}

export const NewGameLayout = ({ ...state }) => {
	return (
		<button
			className={s.newGame}
			onClick={() => {
				NewGameContainer(state);
			}}
		>
			Начать заново
		</button>
	);
};
