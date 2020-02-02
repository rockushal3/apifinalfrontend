import React, { Component } from 'react';
import Header from '../../components/include/header-login'
import Footer from '../../components/include/footer'
import Userprofile from '../../components/userprofile'

class Profile extends Component {
    

    render() {
    

        return (
            <div>
                <Header />
                <Userprofile/>
                <Footer />
            </div>
        )
    }

}

export default Profile
