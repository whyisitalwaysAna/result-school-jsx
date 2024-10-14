export const findDraw = (field) => {
	const isSquareEmpty = field.some((object) => {
		return object.symbol === '';
	});

	if (!isSquareEmpty) return true;

	return false;
};
