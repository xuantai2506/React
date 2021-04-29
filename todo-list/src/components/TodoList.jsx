import { useEffect } from "react";
import Todo from "./Todo"

const TodoList = (props) => {
    const { todoList, markCompleted, removeTodo } = props;

    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
            />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    todoList.listTodos.map((item, index) =>
                        <Todo key={item.id} todoItem={item} {...props} />
                    )
                }
            </ul>
        </section>
    )
}

export default TodoList