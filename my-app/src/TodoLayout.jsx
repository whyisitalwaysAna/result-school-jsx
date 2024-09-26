import s from './Todo.module.css';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import { BiMoon } from 'react-icons/bi';
import { PiPencilSimpleLight } from 'react-icons/pi';
import { GoTrash } from 'react-icons/go';

export const TodoLayout = ({ isLoading, todos }) => {
	return (
		<div className={s.todoAppContainer}>
			<h1>Things to do</h1>
			<form className={s.searchFormContainer}>
				<label className={s.searchLabel}>
					<input
						className={s.searchInput}
						type='text'
						placeholder='Search note or create todo...'
					/>
					<PiMagnifyingGlassThin className={s.searchIcon} />
				</label>
				<button className={s.sortAlphabet}>A</button>
				<button className={s.switchTheme}>
					<BiMoon className={s.moonIcon} />
				</button>
			</form>
			<form className={s.todosFormConainer}>
				{isLoading ? (
					<div className={s.loading}>Loading data...</div>
				) : (
					todos.map(({ _, id, title }) => {
						return (
							<div className={s.todoContainer} key={id}>
								<label className={s.todoLabel} htmlFor={id}>
									<input type='checkbox' id={id} />
									<span className={s.todoCheckbox}></span>
									<span className={s.todoTitle}>{title}</span>
								</label>
								<PiPencilSimpleLight className={s.pencilIcon} />
								<GoTrash className={s.trashIcon} />
							</div>
						);
					})
				)}
			</form>
		</div>
	);
};
