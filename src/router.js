import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Post from './container/post/post'
import Home from './container/home'
import Profile from './container/profile/profile'


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/newsfeed" component={Post} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  Router;

