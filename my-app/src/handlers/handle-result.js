export function handleResult(state, setState, value) {
	switch (state.operator) {
		case '+':
			if (state.equal)
				return setState((prev) => {
					return {
						...prev,
						result: +state.result + +state.operandRight,
					};
				});
			return setState((prev) => {
				return {
					...prev,
					result: +state.operandLeft + +state.operandRight,
				};
			});
		case '-':
			if (state.equal)
				return setState((prev) => {
					return {
						...prev,
						result: +state.result - +state.operandRight,
					};
				});
			return setState((prev) => {
				return {
					...prev,
					result: +state.operandLeft - +state.operandRight,
				};
			});
		default: //nothing
	}
}
