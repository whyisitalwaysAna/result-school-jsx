import s from './Field.module.css';

function FieldContainer(state, index) {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	if (state.isGameEnded) return;
	if (state.isDraw) return;
	if (state.field[index].symbol) return;

	// Рендер Х и О по клику
	state.setField((prev) => {
		prev[index].symbol = state.currentPlayer;
		return [...prev];
	});

	switch (state.currentPlayer) {
		case 'x':
			state.setCurrentPlayer((prev) => {
				if (findWinner('x')) {
					state.setIsGameEnded(true);
					return prev;
				}
				return (prev = 'o');
			});
			break;
		case 'o':
			state.setCurrentPlayer((prev) => {
				if (findWinner('o')) {
					state.setIsGameEnded(true);
					return prev;
				}
				return (prev = 'x');
			});
			break;
		default: // Ничего не делаем
	}

	function findDraw() {
		let counter = 0;

		const draw = state.field.some((object) => {
			counter++;
			return object.symbol === '';
		});

		if (counter >= state.field.length) {
			return state.setIsDraw((prev) => !prev);
		}

		return draw;
	}

	function findWinner(symbol) {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];

			if (
				state.field[a].symbol &&
				state.field[a].symbol === state.field[b].symbol &&
				state.field[a].symbol === state.field[c].symbol
			) {
				return state.field[a].symbol;
			}
		}
		findDraw();
	}
}

export const FieldLayout = ({ ...state }) => {
	return (
		<div className={s.game}>
			<div className={s.board}>
				<div className={s.boardWrapper}>
					{state.field.map(({ id, position, symbol }, index) => {
						return (
							<div
								key={id}
								className={`${s.square} ${s[position]}`}
								onClick={(e) => {
									FieldContainer(state, index);
								}}
							>
								<div className={s[symbol]}></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
