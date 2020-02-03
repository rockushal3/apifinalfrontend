import React, { Component } from 'react';
import Post from './post';
import Success from './success';
import Error from './error';
import axios from 'axios'


class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success_message: '',
      error: ''
    }
    this.state = {
      caption: '',
      image: {},
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }

  sendUser = () => {
    console.log(this.state.isLoggedIn)
    let formdata = new FormData();
    formdata.append('image', this.state.image[0])
    formdata.append('caption', this.state.caption)
    formdata.append('user_id', this.props.user._id)
    axios.post('http://localhost:3030/createpost', formdata, this.state.config).then((response) => {
      this.setState({
        success_message: true
      })

      window.location.reload();

    }).catch(function () {
    })
  }


  render() {

    //post design foreach loop
    const postdesign = this.props.post.map(post => {
      return <Post posts={post} />
    })

    return (

      <section id="aa-blog-archive">
        {this.state.success_message == true ? <Success message="Post successfully uploaded" /> : null}
        {this.state.error == true ? <Error message="Something went wrong" /> : null}

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-blog-archive-area">
                <div className="row">
                  <div className="col-md-2 related-post ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card">
                          <article className="card-group-item">

                            <header className="card-header"><center><img src={"http://localhost:3030/image/" + this.props.user.image} style={{ marginTop: 10 }} className="img-circle" width="100px" height="100px" /></center>
                              <h5 className="title text-center"><b>{this.props.user.name}</b></h5></header>
                            <center style={{ marginTop: 20, marginBottom: 20 }}><a className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{ backgroundColor: '#2699FB' }}>Add Post</a>
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
                                        <input className="form-control" type="text" value={this.state.caption} onChange={(event) =>
                                          this.setState({ caption: event.target.value })} placeholder="What's on your mind?" />
                                        <label for="image">Image:</label><br />
                                        <input className="form-control" type="file" onChange={(event) =>
                                          this.setState({ image: event.target.files })} placeholder="Upload Image" />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" onClick={this.sendUser} className="btn btn-primary">Upload</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="filter-content">
                              <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item">My trip <span className="float-right badge badge-light round">142</span> </a>
                                <a href="#" className="list-group-item">Friends  <span className="float-right badge badge-light round">3</span>  </a>
                                <a href="#" className="list-group-item">Friends Req <span className="float-right badge badge-light round">32</span>  </a>
                                <a href="#" className="list-group-item">Notification<span className="float-right badge badge-light round">12</span>  </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-7 gedf-main">
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