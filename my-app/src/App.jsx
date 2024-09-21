// import { AppLayout } from './AppLayout';
import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FORM_SCHEME } from './constants';
import { sendData } from './utils';
import { AppLayout } from './AppLayout';

export const App = () => {
	const buttonRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		resolver: yupResolver(FORM_SCHEME),
	});

	const errorEmail = errors.email?.message;
	const errorPassword = errors.password?.message;
	const errorRepeatPassword = errors.repeatPassword?.message;
	const isError = errorEmail || errorPassword || errorRepeatPassword;

	useEffect(() => {
		if (!isError) {
			buttonRef.current.focus();
		}
	});

	const props = {
		handleSubmit,
		isError,
		errorEmail,
		errorPassword,
		errorRepeatPassword,
		register,
		buttonRef,
	};

	return <AppLayout {...props} handleSubmit={handleSubmit(sendData)} />;
};
