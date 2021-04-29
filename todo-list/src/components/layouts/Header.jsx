import React , { useEffect, useState } from "react"

const Header = (props) => {
    const [text,setText] = useState('');
    const { addToDo } = props;
    const onAddTodo = (e) => {
        if(e.key == "Enter" && text){
            addToDo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('');
        }
    }
    return (
        <header className="header">
            <h1>Todos</h1> 
            <input 
                className="new-todo"
                placeholder="What need to be done?"
                value={text}
                onChange = {(e) => {setText(e.target.value)}}
                onKeyPress={onAddTodo}
            />
        </header>
    )
}

export default Header