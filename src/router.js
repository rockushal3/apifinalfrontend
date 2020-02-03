import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Post from './container/post/post'
import Home from './container/home'
import Profile from './container/profile/profile'
import Trip from './container/trip/trip'


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/newsfeed" component={Post} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/tripList" component={Trip} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  Router;

