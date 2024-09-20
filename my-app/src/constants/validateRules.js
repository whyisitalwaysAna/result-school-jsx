export const VALIDATE_RULES = {
	required: (value, ...other) => Boolean(value.trim()),
	incorrectMail: (value, ...other) => /@\w+([.-]?\w+)(\.\w)/g.test(value),
	minPassLength: (value, ...other) => value.length >= 6,
	maxPassLength: (value, ...other) => value.length <= 20,
	passStrength: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(value),
	passMatch: (value, pass) => pass === value,
};
