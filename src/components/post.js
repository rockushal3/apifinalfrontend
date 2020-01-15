import React, { Component } from 'react';

class Post extends Component {
  render() {


    return (

      <div className="row post">
        <div className="col-md-12">
          <img src={"http://localhost:3030/image/" + this.props.posts.image} className="img-circle" height="50px" width="50px" />
          <a href="">{this.props.posts.name}</a>
          <a href="" className="float-right font-big"><i className="fa fa-ellipsis-h"></i></a>
        </div>
        <div className="col-md-12">
          <p>{this.props.posts.status}</p>
        </div>
        <div className="col-md-12">
          <img src={"http://localhost:3030/image/" + this.props.posts.image} className="img-responsive post-img" width="100%" />
        </div>
      </div>
    )
  }
}
export default Post;