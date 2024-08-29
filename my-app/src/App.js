import styles from './app.module.css';
import { useState } from 'react';
import data from './data.json';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFirstStep, setIsFirstStep] = useState(true);
	const [isLastStep, setIsLastStep] = useState(false);
	const dataLength = data.length - 1;

	function clickBack(index) {
		if (index === 0) {
			setIsFirstStep(true);
		}

		if (index !== dataLength) {
			setIsLastStep(false);
		}

		setActiveIndex(index);
	}

	function clickForward(index) {
		if (index !== 0) {
			setIsFirstStep(false);
		}

		if (index === dataLength) {
			setIsLastStep(true);
		}

		setActiveIndex(index);
	}

	function startOver() {
		setActiveIndex(0);
		setIsLastStep(false);
		setIsFirstStep(true);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{data.map(({ id, title }, index) => {
							return (
								<li
									key={id}
									className={
										index <= activeIndex
											? styles['steps-item'] +
												' ' +
												styles.done +
												' ' +
												styles.active
											: styles['steps-item']
									}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => {
											setActiveIndex(index);

											index !== 0
												? setIsFirstStep(false)
												: setIsFirstStep(true);

											index === dataLength
												? setIsLastStep(true)
												: setIsLastStep(false);
										}}
									>
										{id.slice(2)}
									</button>
									{title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={() => clickBack(activeIndex - 1)}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								isLastStep
									? startOver
									: () => clickForward(activeIndex + 1)
							}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
