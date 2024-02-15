import { useSelector } from "react-redux";
import AddFrom from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
import { editTodo } from "../features/todo/todoSlice";
import { editBtn } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo() {
	const [editedTask, setEditedTask] = useState("");
	// const [currTask, setCurrTask] = useState("");
    // setCurrTask(editedTask);

	let todos = useSelector((state) => state.todos);
	console.log(todos);

	const dispatch = useDispatch();

	const deleteHandler = (id) => {
		console.log("delete", id);
		dispatch(deleteTodo(id));
        // setEditedTask("");
	};

	const markAsDoneHandler = (id) => {
		console.log("Mark As Done", id);
		dispatch(markAsDone(id));
        // setEditedTask("");
	};

	const opnEditForm = (id) => {
		dispatch(editBtn(id));
        // setEditedTask("");
	};

	const preventForm = (evt) => {
		evt.preventDefault();
	};
	const editHandler = (id) => {
		console.log("Edit Todo", id);
		let obj = { id: id, task: editedTask };
		dispatch(editTodo(obj));
        // setEditedTask("");
	};
	// const editTodo = (id) => {};

	return (
		<>
			<AddFrom />
			<h2>Todos List App</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo?.id}>
						{/* {todo?.isDone.toString()} &nbsp;&nbsp; */}
						<span
							style={
								todo.isDone
									? { textDecoration: "line-through" }
									: { textDecoration: "none" }
							}
						>
							{todo?.task}
						</span>
						&nbsp;&nbsp; &nbsp;&nbsp;
						<button onClick={() => deleteHandler(todo?.id)}>Delete</button>
						&nbsp;&nbsp;
						<button onClick={() => markAsDoneHandler(todo?.id)}>
							MarkAsDone
						</button>
						&nbsp;&nbsp;
						<button onClick={() => opnEditForm(todo?.id)}>Edit</button>
						&nbsp;&nbsp;
						<span>
							{todo.isEdited === true && (
								<form onSubmit={preventForm}>
									<input
										type="text"
                                        value={editedTask}
										onChange={(e) => {
											setEditedTask(e.target.value);
										}}
									/>
									&nbsp;&nbsp;
									<button
										onClick={() => {
											editHandler(todo.id);
										}}
									>
										Edit Todo
									</button>
								</form>
							)}
						</span>
						<br />
					</li>
				))}
			</ul>
		</>
	);
}
