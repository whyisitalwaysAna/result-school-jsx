import s from './Field.module.css';

function FieldContainer(
	field,
	setField,
	index,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
) {
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

	if (isGameEnded) return null;
	if (isDraw) return null;

	function checkDraw() {
		let counter = 0;

		const draw = field.some((object) => {
			counter++;
			return object.symbol === '';
		});

		if (counter >= 9) {
			return setIsDraw((prev) => !prev);
		}

		return draw;
	}

	function findWinner(symbol) {
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
		checkDraw();
	}

	if (field[index].symbol) return null;

	setField((prev) => {
		prev[index].symbol = currentPlayer;
		return [...prev];
	});

	switch (currentPlayer) {
		case 'x':
			setCurrentPlayer((prev) => {
				if (findWinner('x')) {
					setIsGameEnded(true);
					return prev;
				}
				return (prev = 'o');
			});
			break;
		case 'o':
			setCurrentPlayer((prev) => {
				if (findWinner('o')) {
					setIsGameEnded(true);
					return prev;
				}
				return (prev = 'x');
			});
			break;
		default: // Ничего не делаем
	}
}

export const FieldLayout = ({
	currentPlayer,
	setCurrentPlayer,
	field,
	setField,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	return (
		<div className={s.game}>
			<div className={s.board}>
				<div className={s.boardWrapper}>
					{field.map(({ id, position, symbol }, index) => {
						return (
							<div
								key={id}
								className={`${s.square} ${s[position]}`}
								onClick={(e) => {
									FieldContainer(
										field,
										setField,
										index,
										currentPlayer,
										setCurrentPlayer,
										isGameEnded,
										setIsGameEnded,
										isDraw,
										setIsDraw,
									);
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
