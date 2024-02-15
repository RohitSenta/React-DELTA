// todolist - reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [{ id: "abc", task: "sample-task", isDone: false, isEdited: false }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: nanoid(),
				task: action.payload,
				isDone: false,
				isEdited: false,
			};
			state.todos.push(newTodo); // direct mutation
		},
		deleteTodo: (state, action) => {
			// action.payload
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		markAsDone: (state, action) => {
			// action.payload
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isDone = true;
				}
				return todo;
			});
		},
		editBtn: (state, action) => {
			// action.payload
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isEdited = true;
				}
				return todo;
			});
		},
		editTodo: (state, action) => {
			console.log("================>",action.payload);
			// action.payload
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.task = action.payload.task;
					todo.isEdited = false;
				}
				return todo;
			});

		},
	},
});

export const { addTodo, deleteTodo, markAsDone, editBtn, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
