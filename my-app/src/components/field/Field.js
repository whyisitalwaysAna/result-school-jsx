import s from './Field.module.css';
import { store } from '../../reducer';
import { handleSquareClick } from '../../handlers';
import { findDraw, findWinner } from '../../utils';
import { useEffect } from 'react';

export const Field = () => {
	const { field } = store.getState();

	useEffect(() => {
		if (findWinner(field)) {
			store.dispatch({ type: 'SET_GAME_OVER' });

			return () => findWinner(field);
		}

		if (findDraw(field)) {
			store.dispatch({ type: 'SET_GAME_DRAW' });

			return () => findDraw(field);
		}
	}, [field]);

	return (
		<div className={s.game}>
			<div className={s.board}>
				<div className={s.boardWrapper}>
					{field.map(({ position, symbol }, index) => {
						return (
							<div
								key={index}
								className={`${s.square} ${s[position]}`}
								onClick={() => handleSquareClick(index)}
							>
								<div className={s[symbol]}></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
