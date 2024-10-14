import { WIN_PATTERNS } from '../constants';

export const findWinner = (field) => {
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];

		if (
			field[a].symbol &&
			field[a].symbol === field[b].symbol &&
			field[a].symbol === field[c].symbol
		) {
			return field[a].symbol;
		}
	}

	return false;
};
