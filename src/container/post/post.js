import React,{Component} from 'react';
import Header from '../../components/include/header-login'
import Newsfeed from '../../components/newsfeed'
import Footer from '../../components/include/footer'

class Post extends Component {
render(){
    return(
        <div>
            <Header/>
            <Newsfeed/>
            <Footer/>
        </div>
    )
}
}

export default Post
