import s from './Information.module.css';

function InformationConainer(state) {
	if (state.isDraw) return `Ничья!`;

	return state.isGameEnded
		? `Победитель: (${state.currentPlayer})!`
		: `Ход игрока (${state.currentPlayer})`;
}

export const InformationLayout = ({ ...state }) => {
	return <div className={s.header}>{InformationConainer(state)}</div>;
};
