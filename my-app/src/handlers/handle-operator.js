import { handleResult } from "./handle-result";

export function handleOperator(
	{
		equal,
		setEqual,
		result,
		setResult,
		operandLeft,
		setOperandLeft,
		operator,
		setOperator,
		operandRight,
		setOperandRight,
	},
	value,
) {
	if (!operandLeft) return;

	switch (value) {
		case '=':
			if (!operandRight) return;
			setEqual(true);
			return handleResult(
				equal,
				result,
				setResult,
				operandLeft,
				operator,
				operandRight,
			);
		case 'С':
			setOperandLeft('');
			setOperator('');
			setOperandRight('');
			setResult('0');
			setEqual(false);
			return;
		default: //nothing
	}

	if (result !== '0') {
		setOperandLeft(result);
		setOperandRight('');
		setOperator(value);
	}

	setEqual(false);
	setOperator(value);
}
