import s from './newGame.module.css';

function NewGameContainer(setCurrentPlayer, setIsGameEnded, setIsDraw, setField) {
	setCurrentPlayer('x');
	setIsGameEnded(false);
	setIsDraw(false);
	setField([
		{ id: '0', position: 'leftTop', symbol: '' },
		{ id: '1', position: 'centerTop', symbol: '' },
		{ id: '2', position: 'rightTop', symbol: '' },
		{ id: '3', position: 'leftMid', symbol: '' },
		{ id: '4', position: 'centerMid', symbol: '' },
		{ id: '5', position: 'rightMid', symbol: '' },
		{ id: '6', position: 'leftBottom', symbol: '' },
		{ id: '7', position: 'centerBottom', symbol: '' },
		{ id: '8', position: 'rightBottom', symbol: '' },
	]);
}

export const NewGameLayout = ({setCurrentPlayer, setIsGameEnded, setIsDraw, setField}) => {
	return (
		<button
			className={s.newGame}
			onClick={() => {
				NewGameContainer(setCurrentPlayer, setIsGameEnded, setIsDraw, setField);
			}}
		>
			Начать заново
		</button>
	);
};
