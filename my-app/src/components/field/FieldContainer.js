import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({ field, handleSquareClick }) => {
	return <FieldLayout field={field} handleSquareClick={handleSquareClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	handleSquareClick: PropTypes.func,
};
