import s from './Todo.module.css';
import { SortAlphabetically } from './features';
import { InputField, Todo, EditingWindow } from './widgets';

export const TodoAppLayout = ({
	setTodosData,
	setLoadingFlag,
	todosData,
	editedFieldId,
	setEditedFieldId,
}) => {
	return (
		<div className={s.todoAppContainer}>
			<h1>Things to do</h1>
			<nav className={s.navigation}>
				<InputField setTodosData={setTodosData} setLoadingFlag={setLoadingFlag} />
				<SortAlphabetically
					setLoadingFlag={setLoadingFlag}
					setTodosData={setTodosData}
				/>
			</nav>
			<form className={s.todosFormConainer}>
				{todosData.length === 0 ? (
					<div className={s.emptyListIcon}>
						<img
							src={`${process.env.PUBLIC_URL}/emptyListIcon.svg`}
							alt='empty-list-icon'
						/>
						<span>There's nothing here yet...</span>
					</div>
				) : (
					todosData.map(({ _, id, title, checked }) => {
						return editedFieldId !== id ? (
							<Todo
								id={id}
								isChecked={checked}
								title={title}
								setLoadingFlag={setLoadingFlag}
								setEditedFieldId={setEditedFieldId}
								key={id}
							/>
						) : (
							<EditingWindow
								key={editedFieldId}
								editedFieldId={editedFieldId}
								isChecked={checked}
								setLoadingFlag={setLoadingFlag}
								setEditedFieldId={setEditedFieldId}
							/>
						);
					})
				)}
			</form>
		</div>
	);
};
