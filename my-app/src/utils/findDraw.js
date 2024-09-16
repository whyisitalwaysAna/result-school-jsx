export const findDraw = (field, setIsDraw) => {
	const isSquareEmpty = field.some((object) => {
		return object.symbol === '';
	});

	if (!isSquareEmpty) setIsDraw((prev) => !prev);
};
