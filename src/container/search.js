import React, { Component } from 'react';
import Header from '../components/include/header-login'
import Search from '../components/search'
import Footer from '../components/include/footer'
import axios from 'axios'

class Home extends Component {
    

    render() {

        return (
            <div>
                <Header />
                <Search />
                <Footer />

            </div>
        )
    }

}

export default Home
