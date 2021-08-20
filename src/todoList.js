import TodoItem from "./todoItem";

function TodoList({ todos ,onChange,onDelete}) {
	return (
		<div>
			{todos.map((todo,i) => {
				return <TodoItem 
                 key={todo.id}
                 todo={todo}
                 onChange = {onChange}
                 onDelete = {onDelete}

                  />;
			})}
		</div>
	);
}

export default TodoList;
