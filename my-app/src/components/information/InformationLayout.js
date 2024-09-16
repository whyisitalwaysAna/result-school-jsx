import s from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ information }) => {
	return <div className={s.header}>{information}</div>;
};

InformationLayout.propTypes = {
	information: PropTypes.string,
};
