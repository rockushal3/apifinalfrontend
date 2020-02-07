import React, { Component } from 'react';
import Post from './post';
import Friend from './friend';
import axios from 'axios';
import Success from './success';
import { Link, withRouter, Redirect } from 'react-router-dom'

class OtherProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: '',
            successmgs: '',
            trips: [],
            friends: [],
            post: [],
            user: '',
            profileuser: '',
            user_id_1: '',
            user_id_2: '',
            relation: '',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3030/checkLogin', this.state.config)
            .then((response) => {
                this.setState({ user: response.data })
                axios.get('http://localhost:3030/checkRelation?user_id_1=' + this.state.user._id + '&user_id_2=' + this.props.user)
                    .then((response) => {
                        this.setState({
                            relation: response.data

                        })
                        this.setState({ user_id_1: this.state.relation.user_id_1._id })
                        this.setState({ user_id_2: this.state.relation.user_id_2._id })
                    }).catch((e) => {

                    })
            })
        axios.get('http://localhost:3030/findpostByUserId/' + this.props.user, this.state.config)
            .then((response) => {
                this.setState({
                    post: response.data
                })
            })
        axios.get('http://localhost:3030/findUserById/' + this.props.user, this.state.config)
            .then((response) => {
                this.setState({
                    profileuser: response.data
                })
            })
        axios.get('http://localhost:3030/allfriend/' + this.props.user)
            .then((response) => {
                this.setState({
                    friends: response.data
                })
                console.log(this.state.friends)
            })
            axios.get("http://localhost:3030/findTripByUserId/" + this.props.user).then((res) => {
                this.setState({ trips: res.data });
              })    

    }

    sendfriendRequest = () => {
        const data = {
            user_id_1: this.state.user._id,
            user_id_2: this.props.user
        }
        axios.post('http://localhost:3030/addfriend', data, this.state.config)
            .then((response) => {
                this.setState({
                    success: true,
                    successmgs: "request send"
                })
                window.location.reload();
            })
    }

    deleteRequest = () => {

        axios.delete('http://localhost:3030/deleteFriend/' + this.state.relation._id, this.state.config)
            .then((response) => {
                this.setState({
                    success: true,
                    successmgs: "successfully deleted request"
                })
                window.location.reload();
            })
    }

    confirmRequest = () => {

        axios.put('http://localhost:3030/acceptfriend/' + this.state.relation._id, this.state.config)
            .then((response) => {
                this.setState({
                    success: true,
                    successmgs: "You accept friend request"
                })
                window.location.reload();
            })
    }

    render() {
        if (this.state.user._id == this.props.user) {
            return <Redirect to='/profile' />
        }
        //post design foreach loop
        const postdesign = this.state.post.map(post => {
            return <Post posts={post} />
        })

        const friendlist = this.state.friends.map(friend => {
            if (friend.user_id_1._id == this.props.user) {
                return <Friend userdetail={friend.user_id_2} />
            }
            else {
                return <Friend userdetail={friend.user_id_1} />
            }
        })

        const tripslist = this.state.trips.map((tripe, index) => {
            if (index % 2 == 0) {
              return (
              <div class="timeline">
                <div class="timeline-content left">
                  <span class="timeline-icon"></span>
                  <span class="date">{tripe.date}</span>
                  <h2 class="title">{tripe.trip_name}</h2>
                  <p class="description">
                    {tripe.description}
                  </p>
                </div>
              </div>
              )
      
            }
            else {
              return (<div class="timeline">
                <div class="timeline-content right">
                  <span class="timeline-icon"></span>
                  <span class="date">{tripe.date}</span>
                  <h2 class="title">{tripe.trip_name}</h2>
                  <p class="description">
                    {tripe.description}
                  </p>
                </div>
              </div>)
            }
      
      
          })

        return (
            <div className="container" >
                {this.state.success == true ? <Success message={this.state.successmgs} /> : null}
                <div className="row my-2" style={{ paddingTop: 130 }}>
                    <div className="col-lg-4 order-lg-1 text-center">
                        <img src={"http://localhost:3030/image/" + this.state.profileuser.image} width="150px" height="150px" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                        <br />
                        <h4><b>{this.state.profileuser.name}</b></h4>
                        {this.state.user._id == this.state.user_id_1 && this.state.relation.Status == "Requested" ?
                            <div> <button onClick={this.deleteRequest} className="btn btn-default" style={{ marginLeft: 10 }} >Cancel Request</button> </div> : null}
                        {this.state.user._id == this.state.user_id_2 && this.state.relation.Status == "Requested" ?
                            <div><button onClick={this.confirmRequest} className="btn btn-primary">Confirm</button>
                                <button className="btn btn-default" onClick={this.deleteRequest} style={{ marginLeft: 10 }} >Delete</button> </div> : null}
                        {this.state.relation.Status == "Friends" ?
                            <div><button className="btn btn-default">Friends</button>
                            </div> : null}
                        {this.state.relation == "" ?
                            <div><button type="submit" onClick={this.sendfriendRequest} className="btn btn-primary">Send Friend Request</button>
                            </div> : null}


                    </div>
                    <div className="col-lg-8 order-lg-2 user-post">
                        <div classNameName="col-lg-12">
                            <img src={"http://localhost:3030/image/" + this.state.profileuser.coverimage} height="300" className="img-responsive" width="100%" />
                            <br />
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item active">
                                <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                            </li>
                            {this.state.relation.Status == "Friends" ?
                                <li className="nav-item">
                                    <a href="" data-target="#messages" data-toggle="tab" className="nav-link">Friends</a>
                                </li>
                                : null}
                            {this.state.relation.Status == "Friends" ?
                                <li className="nav-item">
                                    <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Trip List</a>
                                </li>
                                : null}


                        </ul>
                        <div className="tab-content py-4">
                            <div className="tab-pane active" id="profile">
                                <h3 className="mb-3 color-blue"><b>User Detail</b></h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Address</h6>
                                        <p>
                                            {this.state.profileuser.address}
                                        </p>
                                        <h6>Phone</h6>
                                        <p>
                                            {this.state.profileuser.phone}
                                        </p>
                                        <h6>Birthday</h6>
                                        <p>
                                            {this.state.profileuser.dob}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>E-Mail</h6>
                                        <p>{this.state.profileuser.email}</p>
                                        <h6>Gender</h6>
                                        <p>{this.state.profileuser.gender}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <h3 className="mb-3 color-blue"><b>User Posts</b></h3>
                                        {postdesign}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="messages">
                                <h3 className="mb-3 color-blue"><b>Friends</b></h3>

                                {friendlist}


                            </div>
                            <div className="tab-pane" id="edit">
                                <h3 className="mb-3 color-blue"><b>Trip List</b></h3>
                                <div class="main-timeline">

                                    {tripslist}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default OtherProfile;