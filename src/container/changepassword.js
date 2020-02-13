import React, { Component } from 'react';
import Header from '../components/include/header-login'
import Changepassword from '../components/changepassword'
import Footer from '../components/include/footer'
class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Changepassword />
                <Footer />
            </div>
        )
    }

}

export default Home
