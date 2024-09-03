export function handleResult(equal, result, setResult, operandLeft, operator, operandRight) {
	switch (operator) {
		case '+':
			if (equal) return setResult(+result + +operandRight);
			return setResult(+operandLeft + +operandRight);
		case '-':
			if (equal) return setResult(+result - +operandRight);
			return setResult(+operandLeft - +operandRight);
		default: //nothing
	}
}
