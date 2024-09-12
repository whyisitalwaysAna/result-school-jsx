import s from './Information.module.css';

function InformationConainer(currentPlayer, isGameEnded, isDraw) {
	if (isDraw) return `Ничья!`;

	return isGameEnded
		? `Победитель: (${currentPlayer})!`
		: `Ход игрока (${currentPlayer})`;
}

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className={s.header}>
			{InformationConainer(currentPlayer, isGameEnded, isDraw)}
		</div>
	);
};
