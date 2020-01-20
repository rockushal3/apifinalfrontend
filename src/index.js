import React from 'react';
import ReactDOM from 'react-dom';


//Components
import Router from './router'


const App = () => {
    return (<div>
        <Router/>
    </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))
