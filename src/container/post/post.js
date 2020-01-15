import React, { Component } from 'react';
import Header from '../../components/include/header-login'
import Newsfeed from '../../components/newsfeed'
import Footer from '../../components/include/footer'
import axios from 'axios';
class Post extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://localhost:3030/findpost").then(res => {
            console.log(res.data)
            this.setState({ posts: res.data });
        })
    }
    render() {

        return (
            <div>
                <Header />
                <Newsfeed post={this.state.posts} />
                <Footer />
            </div>
        )
    }

}

export default Post
