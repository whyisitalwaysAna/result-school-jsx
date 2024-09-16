import s from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleSquareClick }) => {
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleSquareClick: PropTypes.func,
};
