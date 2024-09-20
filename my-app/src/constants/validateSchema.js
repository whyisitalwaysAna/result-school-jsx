export const VALIDATE_SCHEMA = {
	email: {
		required: 'Почта обязательна',
		incorrectMail: 'Почта введена неверно',
	},
	password: {
		required: 'Пароль обязателен',
		minPassLength: 'Минимальная длина пароля 6 символов',
		maxPassLength: 'Максимальная длина пароля 20 символов',
		passStrength: 'Пароль должен содержать цифры, заглавные и строчные буквы',
	},
	repeatPassword: {
		required: 'Повторите пароль',
		passMatch: 'Повторный пароль введён неверно'
	}
};
