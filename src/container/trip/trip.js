import React, { Component } from 'react';
import Header from '../../components/include/header-login'
import Footer from '../../components/include/footer'
import Triplist from '../../components/triplist'

class Trip extends Component {
    

    render() {
    

        return (
            <div>
                <Header />
                <Triplist/>
                <Footer />
            </div>
        )
    }

}

export default Trip
