import s from './Field.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectField, selectGameDraw, selectGameOver } from '../../selectors';
import { findDraw, findWinner } from '../../utils';
import { setCurrentPlayer, SET_GAME_DRAW, SET_GAME_OVER } from '../../actions';
import { useEffect } from 'react';

export const Field = () => {
	const field = useSelector(selectField);
	const isDraw = useSelector(selectGameDraw);
	const isGameOver = useSelector(selectGameOver);
	const dispatch = useDispatch();

	useEffect(() => {
		if (findWinner(field)) {
			dispatch(SET_GAME_OVER);

			return () => findWinner(field);
		}

		if (findDraw(field)) {
			dispatch(SET_GAME_DRAW);

			return () => findDraw(field);
		}
	}, [field, dispatch]);

	const handleSquareClick = (index) => {
		if (isGameOver || isDraw || field[index].symbol) return;

		dispatch(setCurrentPlayer(index));
	};

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
