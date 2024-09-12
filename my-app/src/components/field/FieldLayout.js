import s from './Field.module.css';

// function FieldContainer() {}

export const FieldLayout = () => {
	const square = [
		'leftTop',
		'centerTop',
		'rightTop',
		'leftMid',
		'centerMid',
		'rightMid',
		'leftBottom',
		'centerBottom',
		'rightBottom',
	];

	return (
		<div className={s.game}>
			<div className={s.board}>
				<div className={s.boardWrapper}>
					{square.map((item) => {
						return (
							<div key={item} className={`${s.square} ${s[item]}`}>
								<div></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
