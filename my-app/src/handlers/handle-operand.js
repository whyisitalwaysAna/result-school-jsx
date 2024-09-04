function validateOperand(operand, value) {
	if (operand.length === 10) return false;

	if (value === '0' && !operand) return false;

	return true;
}

export function handleOperand(state, setState, value) {
	if (state.equal) return;

	setState((prev) => {
		const { operandLeft, operator, operandRight } = prev;

		if (operator && validateOperand(operandRight, value)) {
			return {
				...prev,
				operandRight: operandRight + value,
			};
		}

		if (!operator && validateOperand(operandLeft, value)) {
			return {
				...prev,
				operandLeft: operandLeft + value,
			};
		}

		return { ...prev };
	});
}
