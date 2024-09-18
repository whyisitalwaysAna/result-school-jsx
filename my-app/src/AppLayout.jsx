import s from './App.module.css';

export const AppLayout = ({
	getState,
	handleSubmit,
	handleChange,
	handleBlur,
	error,
	sumbitButtonRef,
}) => {
	const { email, password, repeatPassword } = getState;

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			{error && <div className={s.error}>{error}</div>}
			<input
				type='email'
				name='email'
				value={email}
				placeholder='Почта'
				onChange={(event) => handleChange(event, sumbitButtonRef)}
				onBlur={handleBlur}
			/>
			<input
				type='password'
				name='password'
				value={password}
				placeholder='Пароль'
				onChange={(event) => handleChange(event, sumbitButtonRef)}
				onBlur={handleBlur}
			/>
			<input
				type='password'
				name='repeatPassword'
				value={repeatPassword}
				placeholder='Повтор пароля'
				onChange={(event) => handleChange(event, sumbitButtonRef)}
				onBlur={handleBlur}
			/>
			<button ref={sumbitButtonRef} type='submit' disabled={error}>
				Зарегистрироваться
			</button>
		</form>
	);
};
