import { handleResult } from './handle-result';

export function handleOperator(state, setState, value) {
	if (!state.operandLeft) return;

	switch (value) {
		case '=':
			if (!state.operandRight) return;
			setState((prev) => {
				return {
					...prev,
					equal: true,
				};
			});
			return handleResult(state, setState, value);
		case 'С':
			setState({
				result: '0',
				operandLeft: '',
				operandRight: '',
				operator: '',
				equal: false,
			});
			return;
		default: //nothing
	}

	if (state.result !== '0') {
		setState((prev) => {
			return {
				...prev,
				operandLeft: state.result,
				operandRight: '',
				operator: value,
			};
		});
	}

	setState((prev) => {
		return {
			...prev,
			operator: value,
			equal: false,
		};
	});
}
