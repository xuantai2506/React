import logo from './logo.svg';

// component
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import TodoList from './components/TodoList';

// css
import './assets/css/Todo.css'
import './assets/css/App.css';
import { useEffect, useState, useCallback } from 'react';

function App() {

  const [listTodo, setListToDo] = useState({
    listTodos: [],
    idTodoEdit: '',
  })

  // add todo
  const addToDos = (todo = {}) => {
    setListToDo({
      listTodos: [...listTodo.listTodos, todo]
    })
  }
  // find index todo
  const findIndexTodo = (todoLists, id) => {
    const found = todoLists.findIndex(e => e.id == id);
    return found;
  }
  // change status !isCompleted
  const markCompleted = (id = '') => {
    let todoLists = listTodo.listTodos;
    let foundIndex = findIndexTodo(todoLists, id);
    if (foundIndex != -1) {
      todoLists[foundIndex].isCompleted = !todoLists[foundIndex].isCompleted
      setListToDo({
        listTodos: [...todoLists]
      })
    }
  }
  // remove todo
  const removeTodo = (id = '') => {
    let todoLists = listTodo.listTodos;
    let foundIndex = findIndexTodo(todoLists, id);
    if (foundIndex != -1) {
      todoLists.splice(foundIndex, 1);
      setListToDo({
        listTodos: [...todoLists]
      })
    }
  }

  // get todo edit 
  const getEditTodo = (id) => {
    setListToDo({
      ...listTodo,
      idTodoEdit: id
    })
  }

  return (
    <div className="todoapp">
      <Header addToDo={addToDos} />
      <TodoList
        todoList={listTodo}
        markCompleted={markCompleted}
        getEditTodo={getEditTodo}
        idTodoEdit={listTodo.idTodoEdit}
        removeTodo={removeTodo} />
      <Footer />
    </div>
  );
}

export default App;
