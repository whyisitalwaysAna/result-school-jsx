import s from './App.module.css';
import { INPUT_LIST } from './constants';

export const AppLayout = ({
	error,
	state,
	handleChange,
	handleSubmit,
	handleBlur,
	buttonRef,
}) => {
	return (
		<form className={s.form} onSubmit={(e) => handleSubmit(e)}>
			{error && <div className={s.error}>{error[0]}</div>}
			{INPUT_LIST.map((list, index) => {
				return (
					<input
						className={
							error && error[1] === index
								? `${s.input} ${s.redBorder}`
								: s.input
						}
						key={list.id}
						type={list.type}
						name={list.name}
						value={state[index].value}
						placeholder={list.placeholder}
						onChange={(e) => handleChange(e)}
						onBlur={() => handleBlur()}
					></input>
				);
			})}
			<button
				className={s.submit}
				type='submit'
				disabled={error && error.length !== 0}
				ref={buttonRef}
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
