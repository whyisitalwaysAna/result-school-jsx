import styles from './main.module.css';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import { FaSortAlphaDown } from 'react-icons/fa';
import { EmptyFieldIcon, Todo } from '../../components';
import { createTodo, sortTodos } from '../../utils';

export const MainLayout = ({
	todosData,
	setTodosData,
	todoTitle,
	setTodoTitle,
	sortFlag,
	setSortFlag,
	setLoadingFlag,
}) => {
	const isTodoEmpty = todosData.length === 0;

	return (
		<>
			<h1>Things to do</h1>
			<nav className={styles.navMain}>
				<form
					className={styles.navFormContainer}
					onSubmit={(e) => createTodo(e, todoTitle, setTodoTitle)}
				>
					<label className={styles.navLabel}>
						<input
							className={styles.navInput}
							type='search'
							placeholder={'Search or create todo...'}
							value={todoTitle}
							onChange={(e) => setTodoTitle(e.target.value)}
						/>
						<PiMagnifyingGlassThin className={styles.navGlass} />
					</label>
					<button className={styles.navButton} type='submit'>
						Create todo
					</button>
				</form>
				<button
					type='button'
					className={
						sortFlag
							? `${styles.sortTodos} ${styles.sortTodosActive}`
							: styles.sortTodos
					}
					onClick={() => {
						setSortFlag(!sortFlag);
						sortTodos(sortFlag, setTodosData);
					}}
				>
					<FaSortAlphaDown className={styles.sortTodosIcon} />
				</button>
			</nav>
			<form className={styles.todosFormConainer}>
				{isTodoEmpty ? (
					<EmptyFieldIcon>There's nothing here yet...</EmptyFieldIcon>
				) : (
					todosData.map(({ id, title, checked }) => {
						return (
							<Todo
								id={id}
								checked={checked}
								title={title}
								setLoadingFlag={setLoadingFlag}
								key={id}
							/>
						);
					})
				)}
			</form>
		</>
	);
};
