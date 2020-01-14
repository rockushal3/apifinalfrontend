import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Post from './container/post/post'

const App = () =>{
    return (<div>
        <Post/>
    </div>)
}

ReactDOM.render(<App/>,document.querySelector('#root'))
