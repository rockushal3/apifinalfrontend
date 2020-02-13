import React, { Component } from 'react';
import Header from '../components/include/header-login'
import Search from '../components/search'
import Footer from '../components/include/footer'

class Home extends Component {
    

    render() {

        return (
            <div>
                <Header />
                <Search search={this.props.match.params.location}/>
                <Footer />

            </div>
        )
    }

}

export default Home
