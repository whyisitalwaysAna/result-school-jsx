import { createEmptyField } from './utils';
import { createStore } from 'redux';

const initialState = {
	field: createEmptyField(),
	currentPlayer: 'x',
	isGameOver: false,
	isDraw: false,
};

const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			const newField = state.field.map((object, index) =>
				index === payload ? { ...object, symbol: state.currentPlayer } : object,
			);

			const newPlayer = state.currentPlayer === 'x' ? 'o' : 'x';

			return {
				...state,
				currentPlayer: newPlayer,
				field: newField,
			};
		case 'SET_GAME_OVER':
			return {
				...state,
				isGameOver: true,
			};
		case 'SET_GAME_DRAW':
			return {
				...state,
				isDraw: true,
			};
		case 'SET_NEW_GAME':
			return (state = initialState);
		default:
			return state;
	}
};

export const store = createStore(appReducer);
