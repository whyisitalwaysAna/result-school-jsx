import s from './app.module.css';
import { useState } from 'react';
import { getKeys } from './get-keys';

export const App = () => {
	const [state, setState] = useState({
		result: '0',
		operandLeft: '',
		operandRight: '',
		operator: '',
		equal: false,
	});

	const keys = getKeys(state, setState);

	return (
		<div className={s.container}>
			<section className={s.calculatorWrapper}>
				<header className={s.header}>&#128290; Calculator</header>
				<div className={s.display}>
					<div className={s.preview}>
						&nbsp;{state.operandLeft} {state.operator} {state.operandRight}
						{state.equal ? ' =' : null}
					</div>
					<div className={state.equal ? `${s.result} ${s.active}` : s.result}>
						{state.result}
					</div>
				</div>
				<div className={s.operands}>
					{keys.map(
						({ id, value, group, handler }) =>
							group === 'operand' && (
								<button
									key={id}
									className={s.operandButton}
									onClick={() => handler(value)}
								>
									{value}
								</button>
							),
					)}
				</div>
				<div className={s.operators}>
					{keys.map(
						({ id, value, group, handler }) =>
							group === 'operator' && (
								<button
									key={id}
									className={s.operatorButton}
									onClick={() => handler(value)}
								>
									{value}
								</button>
							),
					)}
				</div>
			</section>
		</div>
	);
};
