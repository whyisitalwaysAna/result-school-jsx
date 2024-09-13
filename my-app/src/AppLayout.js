import { FieldLayout } from './components/field';
import { InformationLayout } from './components/information';
import { NewGameLayout } from './components/newGame';
import { useState } from 'react';

export const AppLayout = () => {
	const fieldInitial = [
		{ id: '0', position: 'leftTop', symbol: '' },
		{ id: '1', position: 'centerTop', symbol: '' },
		{ id: '2', position: 'rightTop', symbol: '' },
		{ id: '3', position: 'leftMid', symbol: '' },
		{ id: '4', position: 'centerMid', symbol: '' },
		{ id: '5', position: 'rightMid', symbol: '' },
		{ id: '6', position: 'leftBottom', symbol: '' },
		{ id: '7', position: 'centerBottom', symbol: '' },
		{ id: '8', position: 'rightBottom', symbol: '' },
	];
	const fieldInitialCopy = [...fieldInitial];

	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldInitialCopy);

	const state = {
		fieldInitial,
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
	};

	return (
		<>
			<NewGameLayout {...state} />
			<InformationLayout {...state} />
			<FieldLayout {...state} />
		</>
	);
};
