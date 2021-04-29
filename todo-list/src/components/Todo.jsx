import { useEffect } from "react";

const Todo = (props) => {
    const { todoItem, markCompleted, removeTodo, getEditTodo, idTodoEdit } = props;
    useEffect(() => {
        console.log(idTodoEdit);
    })
    return (
        <li className={`${todoItem.isCompleted ? 'completed' : ""}`} >
            {
                !idTodoEdit ?
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={`${todoItem.isCompleted ? 'completed' : ""}`}
                            onChange={() => markCompleted(todoItem.id)}
                        />
                        <label onDoubleClick={() => getEditTodo(todoItem.id)}>{todoItem.text}</label>
                        <button className="destroy" onClick={() => removeTodo(todoItem.id)} />
                    </div> :
                    <input
                        className="edit"
                        value={todoItem.text}
                    />
            }
        </li>
    )
}

export default Todo;