import React, { Component } from 'react';
import Post from './post';
import SugestedFriend from './sugesstedfriend';
import Success from './success';
import Error from './error';
import axios from 'axios'
import { Animated } from "react-animated-css";



class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success_message: '',
      error: ''
    }
    this.state = {
      caption: '',
      users: [],
      image: {},
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3030/findUser')
      .then((response) => {
        this.setState({
          users: response.data
        })
      })
  }


  sendUser = () => {
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

    const sugestedfriend = this.state.users.map(user1 => {
      return <SugestedFriend userlist={user1} loginuser={this.props.user.name} />
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
                  <div className="col-md-1 ">

                  </div>
                  <div class="col-md-7 gedf-main">
                    {postdesign}
                  </div>
                  <div className="col-md-3 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card">
                          <article className="card-group-item">
                          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                            <header className="card-header">
                              <div className="col-md-4">
                                <img src={"http://localhost:3030/image/" + this.props.user.image} style={{ marginTop: 10, marginRight: 10 }} className="img-circle" width="50px" height="50px" style={{ marginBottom: 20 }} />
                              </div><div className="col-md-8"><a href="/profile"><b>@{this.props.user.name}</b></a><br /> {this.props.user.address}
                              </div>
                            </header>
                          </Animated>
                            <br /><a className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{ backgroundColor: '#2699FB', width: "100%" }}>Add Post</a>

                            <div id="myModal" class="modal fade" role="dialog">
                              <div className="modal-dialog">

                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Create a Post</h4>
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
                          </article>
                        </div>
                      </div>

                    </div>
                    <div className="row related-post">
                      <aside className="aa-blog-sidebar ">
                        <div className="aa-sidebar-widget">
                          <h3>People You May Know</h3>
                          <div className="aa-recently-views suggestedfriend">
                            <ul>
                              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                                {sugestedfriend}
                              </Animated>

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
        </div>
      </section>
    )
  }
}
export default Newsfeed;