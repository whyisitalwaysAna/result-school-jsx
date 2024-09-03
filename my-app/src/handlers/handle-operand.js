export function handleOperand(
	{ equal, operandLeft, setOperandLeft, operator, operandRight, setOperandRight },
	value,
) {
	if (value === '0') {
		if (!operandLeft) return;
		if (!operandRight) return;
	}

	if (equal) return;

	if (operator) {
		if (operandRight.length === 10) return;

		setOperandRight((prev) => prev + value);
	}

	if (!operator) {
		if (operandLeft.length === 10) return;

		setOperandLeft((prev) => prev + value);
	}
}
