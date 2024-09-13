import s from './NewGame.module.css';
import { NewGameContainer } from './NewGameContainer';

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
