import s from './app.module.css';
import { useState } from 'react';
import { getKeys } from './get-keys';

export const App = () => {
	const [equal, setEqual] = useState(false);
	const [result, setResult] = useState('0');
	const [operandLeft, setOperandLeft] = useState('');
	const [operator, setOperator] = useState('');
	const [operandRight, setOperandRight] = useState('');

	const state = {
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
	};

	const keys = getKeys(state);

	return (
		<div className={s.container}>
			<section className={s.calculatorWrapper}>
				<header className={s.header}>&#128290; Calculator</header>
				<div className={s.display}>
					<div className={s.preview}>
						&nbsp;{operandLeft} {operator} {operandRight}
						{equal ? ' =' : null}
					</div>
					<div className={equal ? `${s.result} ${s.active}` : s.result}>
						{result}
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
