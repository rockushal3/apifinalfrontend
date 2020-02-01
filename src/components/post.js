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
            //   <div className="card gedf-card">
            //                     <div className="card-header">
            //                         <div className="d-flex justify-content-between align-items-center">
            //                             <div className="d-flex justify-content-between align-items-center">
            //                                 <div className="mr-2">
            //                                     <img className="img-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
            //                                 </div>
            //                                 <div className="ml-2">
            //                                     <div className="h5 m-0">@LeeCross</div>
            //                                     <div className="h7 text-muted">Miracles Lee Cross</div>
            //                                 </div>
            //                             </div>
            //                             <div>
            //                                 <div className="dropdown">
            //                                     <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                                         <i className="fa fa-ellipsis-h"></i>
            //                                     </button>
            //                                     <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
            //                                         <div className="h6 dropdown-header">Configuration</div>
            //                                         <a className="dropdown-item" href="#">Save</a>
            //                                         <a className="dropdown-item" href="#">Hide</a>
            //                                         <a className="dropdown-item" href="#">Report</a>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>

            //                     </div>
            //                     <div class="card-body">
            //                         <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
            //                         <a class="card-link" href="#">
            //                             <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
            //                         </a>

            //                         <p class="card-text">
            //                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
            //                             sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
            //                         </p>
            //                     </div>
            //                     <div class="card-footer">
            //                         <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
            //                         <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
            //                         <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
            //                     </div>
            //                 </div>
        )
    }
}
export default Post;