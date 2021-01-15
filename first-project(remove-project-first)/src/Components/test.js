import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './users/comment';
import Clock from './Clock';
const data = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
function Test(){
    return (
        <div>
            <Clock/>
            Comment : <Comment date={data.date} text={data.text} author={data.author}/>
        </div>
    );
}

export default Test ;