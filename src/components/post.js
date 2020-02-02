import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="row post">
                <div className="col-md-12 color-white">
                    <img src={"http://localhost:3030/image/" + this.props.posts.user_id.image} className="img-circle" height="45px" width="45px" />
                    <a href="">{this.props.posts.user_id.name}</a>
                    <div className="dropdown float-right">
                        <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                            <a className="dropdown-item" href="#">Delete</a>
                        </div>
                    </div>
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