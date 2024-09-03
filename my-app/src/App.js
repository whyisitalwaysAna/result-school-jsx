import s from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [result, setResult] = useState('0');
	const [operand_1, setOperand_1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand_2, setOperand_2] = useState('');
	const [equal, setEqual] = useState(false);

	const keys = [
		{ id: '1', value: '1', group: 'operand', handler: handleOperand },
		{ id: '2', value: '2', group: 'operand', handler: handleOperand },
		{ id: '3', value: '3', group: 'operand', handler: handleOperand },
		{ id: '4', value: '4', group: 'operand', handler: handleOperand },
		{ id: '5', value: '5', group: 'operand', handler: handleOperand },
		{ id: '6', value: '6', group: 'operand', handler: handleOperand },
		{ id: '7', value: '7', group: 'operand', handler: handleOperand },
		{ id: '8', value: '8', group: 'operand', handler: handleOperand },
		{ id: '9', value: '9', group: 'operand', handler: handleOperand },
		{ id: '0', value: '0', group: 'operand', handler: handleOperand },
		{ id: 'С', value: 'С', group: 'operator', handler: handleOperator },
		{ id: '-', value: '-', group: 'operator', handler: handleOperator },
		{ id: '+', value: '+', group: 'operator', handler: handleOperator },
		{ id: '=', value: '=', group: 'operator', handler: handleOperator },
	];

	function handleOperand(target) {
		if (target === '0') {
			if (!operand_1) return;
			if (!operand_2) return;
		}

		if (equal) return;

		if (operator) {
			if (operand_2.length === 10) return;

			setOperand_2((prev) => prev + target);
		}

		if (!operator) {
			if (operand_1.length === 10) return;

			setOperand_1((prev) => prev + target);
		}
	}

	function handleOperator(target) {
		if (!operand_1) return;

		switch (target) {
			case '=':
				if (!operand_2) return;
				setEqual(true);
				return calcResult(operator);
			case 'С':
				setOperand_1('');
				setOperator('');
				setOperand_2('');
				setResult('0');
				setEqual(false);
				return;
			default: //nothing
		}

		if (result !== '0') {
			setOperand_1(result);
			setOperand_2('');
			setOperator(target);
		}

		setEqual(false);
		setOperator(target);
	}

	function calcResult(action) {
		switch (action) {
			case '+':
				if (equal) return setResult(+result + +operand_2);
				return setResult(+operand_1 + +operand_2);
			case '-':
				if (equal) return setResult(+result - +operand_2);
				return setResult(+operand_1 - +operand_2);
			default: //nothing
		}
	}

	return (
		<div className={s.container}>
			<section className={s.calculatorWrapper}>
				<header className={s.header}>&#128290; Calculator</header>
				<div className={s.display}>
					<div className={s.preview}>
						&nbsp;{operand_1} {operator} {operand_2}
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
