import './index.css';
import ColorBox from '../../ColorBox';
import { useEffect, useState } from 'react';
import ToDoList from '../../TodoList';
import TodoForm from '../../TodoForm';
import PostList from '../../PostList';
import Pagination from '../../Pagination';
import PostFilterForm from '../../PostFilterForm';
import Clock from '../../Clock';
import MagicColor from '../../MagicColor';

import queryString from 'query-string';
function HomePage() {
    // state todo list
    const [todoList, setTodoList] = useState([
        { id: 1, title: "I love React" },
        { id: 2, title: "I Love PSCD" },
        { id: 3, title: "I love todo List" },
    ])
    // state post list
    const [postList, setPostList] = useState([]);
    // state pagination
    const [pagination, setPagination] = useState({
        _limit: 10,
        _page: 1,
        _totalRows: 11,
    });
    // state filter dependency 
    const [filter, setFilter] = useState(
        {
            _limit: 10,
            _page: 1
        }
    )
    // effect post list
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                const { data, pagination } = responseJson;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch post list : ', error.massage);
            }
        }
        fetchPostList();
    }, [filter])

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
    function handleChangePage(newPage) {
        setFilter({
            ...filter,
            _page: newPage,
        })
    }
    function handSubmitFilter(newFilters) {
        setFilter({
            ...filter,
            _page: 1,
            description_like: newFilters.search
        })
    }
    const [showClock, setShowClock] = useState(true);
    return (
        <div className="app">
            <h5>Hello xuantai hooks</h5>
            <ColorBox />
            <TodoForm onSubmit={handleAddItemTodoSubmit} />
            <ToDoList todos={todoList} onTodoClick={handleTodoList} />
            <hr />
            <MagicColor />
            {showClock && <Clock />}
            <button onClick={() => { setShowClock(false) }}>Hide unmount Clock</button>
            <PostFilterForm onSubmit={handSubmitFilter} />
            <PostList posts={postList} />
            <Pagination onChangePage={handleChangePage} pagination={pagination} />
        </div>
    );
}

export default HomePage;
