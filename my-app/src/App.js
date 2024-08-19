import logo from './logo.svg';
import './App.css';

/**
 * ? Мне кажется здесь везде декларативный стиль, верно-ли это?
 * ? Мы экспортируем константу App, в целом, мы понимаем что она делает - это приложение.
 * ? Внутри приложения описываем HTML, весь HTML декларативный.
 * ? В теге time мы обращаемся к сегодняшней дате и явно просим текущий год.
 */

export const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<time>{new Date().getFullYear()}</time>
			</header>
		</div>
	);
};
