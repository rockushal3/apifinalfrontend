import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Post from './container/post/post'
import Home from './container/home'


class Router extends Component {
    render() {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newsfeed" component={Post} />
            </Switch>
        </BrowserRouter>
    </div>)
}
}

export default Router;

