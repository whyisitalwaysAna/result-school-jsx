import { store } from '../reducer';

export const handleRestartClick = () => {
	store.dispatch({ type: 'SET_NEW_GAME' });
};
