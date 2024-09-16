import { useState } from 'react';
import { AppLayout } from './AppLayout';
import { handleRestartClick, handleSquareClick } from './handlers';
import { createEmptyField } from './utils';

export const AppContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(createEmptyField());

	const state = {
		createEmptyField,
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
		<AppLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
			field={field}
			handleSquareClick={(index) => handleSquareClick(state, index)}
			handleRestartClick={() => handleRestartClick(state)}
		/>
	);
};
