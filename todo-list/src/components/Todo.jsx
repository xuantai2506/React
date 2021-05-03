import { useEffect, useState } from "react";

const Todo = (props) => {
    const { todoItem, markCompleted, removeTodo, getEditTodo, idTodoEdit, editTodo, index } = props;
    const [text, setText] = useState(todoItem.text);
    let idEdit = idTodoEdit === todoItem.id;

    const onEditText = () => {
        editTodo({
            ...todoItem,
            text
        }, index);
    }

    return (
        <li className={`${idEdit ? "editing" : ""}${todoItem.isCompleted ? 'completed' : ""}`} >
            {
                !idEdit ?
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
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={() => onEditText()}
                        onKeyPress={(e) => {
                            if (e.key == "Enter" && text) {
                                onEditText()
                            }
                        }}
                    />
            }
        </li>
    )
}

export default Todo;