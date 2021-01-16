import logo from './logo.svg';
import './App.css';
import ColorBox from './Components/ColorBox';
import { useEffect, useState } from 'react';
import ToDoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import PostList from './Components/PostList';

function App() {
  // state todo list
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love React" },
    { id: 2, title: "I Love PSCD" },
    { id: 3, title: "I love todo List" },
  ])
  // state post list
  const [postList, setPostList] = useState([]);
  // effect post list
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://localhost:8081/manager';
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { blogs, countries } = responseJson;
        setPostList(blogs); 
      }catch(error){
        console.log('Failed to fetch post list : ' , error.massage);
      }
    }
    fetchPostList();
  }, [])

  function handleTodoList(itemTodo) {
    const index = todoList.findIndex(item => item.id == itemTodo.id);
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }
  function handleAddItemTodoSubmit(itemTodo) {
    const newTodo = [...todoList];
    const newItemTodo = {
      id: todoList.length + 1,
      ...itemTodo
    }
    newTodo.push(newItemTodo);
    setTodoList(newTodo);
  }
  return (
    <div className="app">
      <h5>Hello xuantai hooks</h5>
      <ColorBox />
      <TodoForm onSubmit={handleAddItemTodoSubmit} />
      <ToDoList todos={todoList} onTodoClick={handleTodoList} />
      <hr />
      <PostList posts={postList} />
    </div>
  );
}

export default App;
