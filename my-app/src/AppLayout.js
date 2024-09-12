import { FieldLayout } from './components/field';
import { InformationLayout } from './components/information';
import { NewGameLayout } from './components/newGame';

export const AppLayout = () => {
	return (
		<>
			<NewGameLayout />
			<InformationLayout />
			<FieldLayout />
		</>
	);
};
