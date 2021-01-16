import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

ToDoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function ToDoList(props) {
    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <div>
            <ul className="todo-list">
                {todos.map(item => (
                    <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;