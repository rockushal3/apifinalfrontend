import React, { Component } from 'react';
import Header from '../../components/include/header-login'
import Newsfeed from '../../components/newsfeed'
import Footer from '../../components/include/footer'
import axios from 'axios';
class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            posts: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3030/checkLogin', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
                console.log(this.state.isLoggedIn)
            });
        axios.get("http://localhost:3030/findpost", this.state.config).then(res => {
            this.setState({ posts: res.data });
        })
    }

    render() {


        return (
            <div>
                <Header />
                <Newsfeed post={this.state.posts} user={this.state.user} />
                <Footer />
            </div>
        )
    }

}

export default Post
