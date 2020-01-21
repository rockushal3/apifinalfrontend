import React, { Component } from 'react';
import Header from '../components/include/header'
import Login from '../components/home'
import Footer from '../components/include/footer'
class Home extends Component {

    render() {

        return (
            <div>
                <Header />
                <Login />
                <Footer />

            </div>
        )
    }

}

export default Home
