 function TodoFooter ({todos,onClearCompleted}){

const complatedSizes = todos.filter((todo)=> todo.isCompleted).length
return (
    <div>
        <span> {complatedSizes}/{todos.length} Complated</span>
        <button onClick = { onClearCompleted} > Clear Complated </button>
    </div>
)
 } 
 export default TodoFooter