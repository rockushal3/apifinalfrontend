import React, { Component } from 'react';
import Post from './post';
class Newsfeed extends Component {

  render() {
    //post design foreach loop
    const postdesign = this.props.post.map(post => {
      return <Post posts={post} />
    })

    return (

      <section id="aa-blog-archive">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-blog-archive-area">
                <div className="row">
                  <div className="col-md-2 related-post">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card">
                          <article className="card-group-item">
                            <center style={{ marginTop: 20 }}><a className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{ backgroundColor: '#2699FB' }}>Add Post</a>
                            </center>
                            <div id="myModal" class="modal fade" role="dialog">
                              <div className="modal-dialog">

                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add Trip</h4>
                                  </div>
                                  <div className="modal-body">
                                    <form >
                                      <div className="form-group">
                                        <label for="caption">Caption:</label><br />
                                        <input className="form-control" type="text" placeholder="What's on your mind?" />
                                        <label for="image">Image:</label><br />
                                        <input className="form-control" type="file" placeholder="Upload Image" />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Upload</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <header className="card-header"><h6 className="title">Kushal Shrestha</h6></header>
                            <div className="filter-content">
                              <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item">My trip <span className="float-right badge badge-light round">142</span> </a>
                                <a href="#" className="list-group-item">Friends  <span className="float-right badge badge-light round">3</span>  </a>
                                <a href="#" className="list-group-item">Friends Req <span className="float-right badge badge-light round">32</span>  </a>
                                <a href="#" className="list-group-item">List<span className="float-right badge badge-light round">12</span>  </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-7">
                    {postdesign}
                  </div>
                  <div className="col-md-3 related-post">
                    <aside className="aa-blog-sidebar">
                      <div className="aa-sidebar-widget">
                        <h3>People You May Know</h3>
                        <div className="aa-recently-views">
                          <ul>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
                              <div className="aa-cartbox-info">
                                <h4><a href="#">Kushal Shrestha</a></h4>
                                <p><button className="btn btn-default">Send Request</button></p>
                              </div>
                            </li>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
                              <div className="aa-cartbox-info">
                                <h4><a href="#">Kushal Shrestha</a></h4>
                                <p><button className="btn btn-default">Send Request</button></p>
                              </div>
                            </li>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
                              <div className="aa-cartbox-info">
                                <h4><a href="#">Kushal Shrestha</a></h4>
                                <p><button className="btn btn-default">Send Request</button></p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Newsfeed;