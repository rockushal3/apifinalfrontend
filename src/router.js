import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Post from './container/post/post'
import Home from './container/home'
import Profile from './container/profile/profile'
import Trip from './container/trip/trip'
import FriendProfile from './container/friendsprofile/friendprofile'
import Changepassword from './container/changepassword'
import Search from './container/search'


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/newsfeed" component={Post} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/trip" component={Trip} />
                    <Route path="/usersprofile/:id" component={FriendProfile} />
                    <Route path="/Changepassword" component={Changepassword} />
                    <Route path="/Search/:location" component={Search} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default  Router;

