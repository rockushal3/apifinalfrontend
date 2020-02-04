import React, { Component } from 'react';
import axios from 'axios'
import Success from './success';


class Post extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        success_message:'',
          user: {},
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
        })
    }
    deletepost = () => {
    
        axios.delete('http://localhost:3030/deletepost/'+this.props.posts._id).then((response) => {
          this.setState({
            success_message: true
          })
    
          window.location.reload();
    
        }).catch(function () {
        })
      }
    render() {
        return (
            <div className="row post">
            {this.state.success_message == true ? <Success message="Post successfully deleted" /> : null}

                <div className="col-md-12 color-white">
                    <img src={"http://localhost:3030/image/" + this.props.posts.user_id.image} className="img-circle" height="45px" width="45px" />
                    <a href={"/usersprofile/" + this.props.posts.user_id._id}>{this.props.posts.user_id.name}</a>
                    {this.state.user._id == this.props.posts.user_id._id ?  <div className="dropdown float-right">
                        <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                            <a className="dropdown-item" type="submit" onClick={this.deletepost}>Delete</a>
                        </div>
                    </div>: null}
                   
                </div>
                <div className="col-md-12">
                    <p>{this.props.posts.caption}</p>
                </div>
                <div className="col-md-12">
                    <img src={"http://localhost:3030/image/post/" + this.props.posts.image} className="img-responsive post-img" width="100%" />
                </div>
            </div>
            
        )
    }s
}
export default Post;