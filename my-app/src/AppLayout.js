import s from './App.module.css';
import { FieldContainer } from './components/field';
import { InformationContainer } from './components/information';
import PropTypes from 'prop-types';

export const AppLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	handleRestartClick,
	handleSquareClick,
}) => {
	return (
		<>
			<button className={s.restart} onClick={handleRestartClick}>
				Начать заново
			</button>
			<InformationContainer
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>
			<FieldContainer field={field} handleSquareClick={handleSquareClick} />
		</>
	);
};

AppLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleRestartClick: PropTypes.func,
	handleSquareClick: PropTypes.func,
};
