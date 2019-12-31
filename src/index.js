import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './components/include/header'
import HeaderLogin from './components/include/header-login'
import Footer from './components/include/footer'
import Home from './components/home'
import Newsfeed from './components/newsfeed'
const App = () =>{
    return (<div>
        <HeaderLogin/>
        <Newsfeed/>
        <Footer/>
    </div>)
}

ReactDOM.render(<App/>,document.querySelector('#root'))
