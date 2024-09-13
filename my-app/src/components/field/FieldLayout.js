import s from './Field.module.css';
import { FieldContainer } from './FieldContainer';
import PropTypes from 'prop-types';

export const FieldLayout = ({ ...state }) => {
	return (
		<div className={s.game}>
			<div className={s.board}>
				<div className={s.boardWrapper}>
					{state.field.map(({ id, position, symbol }, index) => {
						return (
							<div
								key={id}
								className={`${s.square} ${s[position]}`}
								onClick={(e) => {
									FieldContainer(state, index);
								}}
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
};

