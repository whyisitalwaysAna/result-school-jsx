export const handleChange = ({ target }, updateState) => {
	updateState(target.name, target.value);
};
