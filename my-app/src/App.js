/* eslint-disable default-case */
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const operators = ['C', '-', '+', '='];
	const [result, setResult] = useState('0');
	const [operand_1, setOperand_1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand_2, setOperand_2] = useState('');
	const [flagForEqual, setFlagForEqual] = useState(false);

	function getOperand(event) {
		const currentOperand = event.target.textContent;

		if (currentOperand === '0') {
			if (operand_1 === '') return null;
			if (operand_2 === '') return null;
		}

		if (flagForEqual === true) {
			return null;
		}

		if (operator === '') {
			if (operand_1.length === 10) return null;

			setOperand_1((prev) => {
				return prev + currentOperand;
			});
		}

		if (operator !== '') {
			if (operand_2.length === 10) return null;

			setOperand_2((prev) => {
				return prev + currentOperand;
			});
		}
	}

	function getOperator(event) {
		const currentOperator = event.target.textContent;
		if (operand_1 === '') return null;

		switch (currentOperator) {
			case '=':
				if (operand_2 === '') return null;
				setFlagForEqual(true);
				return calcResult(operator);
			case 'C':
				setOperand_1('');
				setOperator('');
				setOperand_2('');
				setResult('0');
				setFlagForEqual(false);
				return null;
		}

		if (result !== '0') {
			setOperand_1(result);
			setOperand_2('');
			setOperator(currentOperator);
		}

		setFlagForEqual(false);
		setOperator(currentOperator);
	}

	function calcResult(action) {
		switch (action) {
			case '+':
				if (flagForEqual === true)
					return setResult((+result + +operand_2).toFixed(0));
				return setResult((+operand_1 + +operand_2).toFixed(0));
			case '-':
				if (flagForEqual === true)
					return setResult((+result - +operand_2).toFixed(0));
				return setResult((+operand_1 - +operand_2).toFixed(0));
		}
	}

	return (
		<div className={styles.container}>
			<section className={styles['calculator-wrapper']}>
				<header className={styles.header}>&#128290; Calculator</header>
				<div className={styles.display}>
					<div className={styles.preview}>
						&nbsp;{operand_1} {operator} {operand_2}
						{flagForEqual ? ' =' : null}
					</div>
					<div
						className={
							flagForEqual
								? styles.result + ' ' + styles.active
								: styles.result
						}
					>
						{result}
					</div>
				</div>
				<div className={styles.operands}>
					{operands.reverse().map((oper) => {
						return (
							<button
								key={oper}
								className={styles['operand-button']}
								onClick={(e) => getOperand(e)}
							>
								{oper}
							</button>
						);
					})}
				</div>
				<div className={styles.operators}>
					{operators.map((oper) => {
						return (
							<button
								key={oper}
								className={styles['operator-button']}
								onClick={(e) => getOperator(e)}
							>
								{oper}
							</button>
						);
					})}
				</div>
			</section>
		</div>
	);
};
