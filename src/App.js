import { useReducer, useState } from "react";
import "./App.css";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoList from "./todoList";

function reducer(state, action) {
	if (action.type === "add") {
		return [
			...state,
			{
				id: Math.random(),
				text: action.payload.text,
				isCompleted: false,
			},
		];
	} else if (action.type === "delete") {
		return state.filter((t) => t.id !== action.payload.id);
	} else if (action.type === "clearCompleted") {
		return state.filter((todo) => !todo.isCompleted);
	} else if ((action.type = "change")) {
		return state.map((todo) => {
	
			if (todo.id === action.payload.id) {
						
		
		}});
	}
}
function App() {
	const [todos, dispatch] = useReducer(reducer, [
		{
			id: Math.random(),
			text: "learn JS",
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: "learn React",
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: "learn Redux",
			isCompleted: false,
		},
	]);

	return (
		<div className="App">
			<TodoForm
				onAdd={(text) => {
					dispatch({
						type: "add",
						payload: {
							text: text,
						},
					});
				}}
			/>
			<TodoList
				todos={todos}
				onDelete={(todo) => {
					dispatch({
						type: "delete",
						payload: {
							id: todo.id,
						},
					});
				}}
				onChange={(newTodo) => {
					alert(newTodo.isCompleted)
					dispatch({
						type: "change",
						payload: {
							isCompleted: newTodo.isCompleted,
							id : newTodo.id
						},
					});
				}}
			/>
			<TodoFooter
				todos={todos}
				onClearCompleted={(todo) => {
					dispatch({
						type: "clearComplated",
						payload: {
							id:todo.id,
							isCompleted: todo.isCompleted,
						},
					});
				}}
			/>
		</div>
	);
}

export default App;
