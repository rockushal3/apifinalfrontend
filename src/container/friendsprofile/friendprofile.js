import React, { Component } from 'react';
import Header from '../../components/include/header-login'
import Profile from '../../components/othersprofile'
import Footer from '../../components/include/footer'
class FriendProfile extends Component {
    
   
    render() {
        return (
            <div>
                <Header />
                <Profile user={this.props.match.params.id}/>
                <Footer />
            </div>
        )
    }

}

export default FriendProfile
