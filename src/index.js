import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Post from './container/post/post'
import Footer from './components/include/footer'


const App = () => {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Footer} />
                <Route path="/newsfeed" component={Post} />
            </Switch>
        </BrowserRouter>
    </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))
