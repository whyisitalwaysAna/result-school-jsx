import * as yup from 'yup';

export const FORM_SCHEME = yup.object().shape({
	email: yup
		.string()
		.required('Почта обязательна')
		.matches(/@\w+([.-]?\w+)(\.\w)/g, 'Почта введена неверно'),
	password: yup
		.string()
		.required('Пароль обязателен')
		.min(6, 'Минимальная длина пароля 6 символов')
		.max(20, 'Максимальная длина пароля 20 символов')
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/m,
			'Пароль должен содержать цифры, заглавные и строчные буквы',
		),
	repeatPassword: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password')], 'Повтор пароля введён неверно'),
});
