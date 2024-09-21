import s from './App.module.css';
import { sendData } from './utils';

export const AppLayout = (props) => {
	return (
		<form
			className={s.form}
			onSubmit={(e) => {
				e.preventDefault();
				props.handleSubmit(sendData);
			}}
		>
			{props.isError && <div className={s.error}>{props.isError}</div>}
			<input
				className={props.errorEmail ? `${s.input} ${s.redBorder}` : s.input}
				type='email'
				name='email'
				placeholder='Почта'
				{...props.register('email')}
			></input>
			<input
				className={props.errorPassword ? `${s.input} ${s.redBorder}` : s.input}
				type='password'
				name='password'
				placeholder='Пароль'
				{...props.register('password')}
			></input>
			<input
				className={
					props.errorRepeatPassword ? `${s.input} ${s.redBorder}` : s.input
				}
				type='password'
				name='repeatPassword'
				placeholder='Повторите пароль'
				{...props.register('repeatPassword')}
			></input>
			<button
				ref={props.buttonRef}
				className={s.submit}
				type='submit'
				disabled={!!props.isError}
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
