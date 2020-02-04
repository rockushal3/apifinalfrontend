import React, { Component } from 'react';
import axios from 'axios'
class SugestedFriend extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          relation: '',
          user:'',
          config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
          
        }
      }
      
    sendfriendRequest = () => {
        const data={
            user_id_1 : this.state.user._id,
            user_id_2 : this.props.userlist._id
        }
        axios.post('http://localhost:3030/addfriend' , data, this.state.config)
            .then((response) => {                
                window.location.reload();
            })
    }

    componentDidMount() {
        axios.get('http://localhost:3030/checkLogin', this.state.config)
        .then((response) => {
            this.setState({
                user:response.data
                })
       
        axios.get('http://localhost:3030/checkRelation?user_id_1=' + this.state.user._id + '&user_id_2=' + this.props.userlist._id)
                    .then((response) => {
                        this.setState({
                            relation: response.data
                        })
                        console.log()
                    }).catch((e) => {

                    })
                });
    }
    
    render() {
        if(this.state.relation==""){
            if(this.state.user._id == this.props.userlist._id){
       return null
    }
    else{
        return (
            <li>
            <a className="aa-cartbox-img" href="#"><img src={"http://localhost:3030/image/"+this.props.userlist.image} width="50px" className="img-responsive" alt="img" /></a>
            <div className="aa-cartbox-info">
        <h4><a href={"/usersprofile/" + this.props.userlist._id}>{this.props.userlist.name}</a></h4>
              <p><button onClick={this.sendfriendRequest} className="btn btn-default">Send Request</button></p>
            </div>
          </li>
            
        )
    }
}
    else{
        return null
    }
}
}
export default SugestedFriend;