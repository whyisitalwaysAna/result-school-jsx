export const validate = (state, validateSchema, validateRules) => {
	let error = [];

	for (const input of state) {
		const rules = validateSchema[input.name];
		const password = state[1].value;

		for (const rule in rules) {
			const message = rules[rule];

			const validator = validateRules[rule];

			const hasError = validator && !validator(input.value, password);

			if (hasError) {
				error = [message, input.id];
				break;
			}
		}
	}

	return error;
};
