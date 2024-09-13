import s from './Information.module.css';
import { InformationContainer } from './InformationContainer';

export const InformationLayout = ({ ...state }) => {
	return <div className={s.header}>{InformationContainer(state)}</div>;
};
