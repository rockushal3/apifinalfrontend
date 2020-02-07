import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'


class HeaderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      friendrequest: [],
      relation: [],
      success:{},
      successmgs:{},
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
          isLoggedIn: true,
          user: response.data
        })
        axios.get("http://localhost:3030/getallrelation/" + this.state.user._id).then((res) => {
          this.setState({ relation: res.data });
        })
        axios.get("http://localhost:3030/getrequest/" + this.state.user._id).then((res) => {
          this.setState({ friendrequest: res.data });
        })
      }).catch((e) => {
        this.setState({
          isLoggedIn: false
        })
      });
  }
  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/')
  }

  deleteRequest = (id) => {

    axios.delete('http://localhost:3030/deleteFriend/' + id, this.state.config)
        .then((response) => {
            this.setState({
                success: true,
                successmgs: "successfully deleted request"
            })
            window.location.reload();
        })
}

confirmRequest = (id) => {

    axios.put('http://localhost:3030/acceptfriend/' + id, this.state.config)
        .then((response) => {
            this.setState({
                success: true,
                successmgs: "You accept friend request"
            })
            window.location.reload();
        })
}
  render() {
    if (this.state.isLoggedIn === false) {
      return <Redirect to='/' />
    }

    //notification function 
    const friendNotification = this.state.relation.map(friend => {
      if (friend.user_id_1._id == this.state.user._id && friend.Status == "Friends") {
        return (
          <li>
            <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src={"http://localhost:3030/image/" + friend.user_id_2.image} alt="" className="img-circle" width="45px" height="45px" /></div></div>
            <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><b>{friend.user_id_2.name}</b> accept your a Friend Request
         <hr />
              <p class="time">3 hours</p>
            </div>
          </li>
        )
      }
      else if (friend.user_id_2._id == this.state.user._id && friend.Status == "Requested") {
        return (
          <li>
            <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src={"http://localhost:3030/image/" + friend.user_id_1.image} alt="" className="img-circle" width="45px" height="45px" /></div></div>
            <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><b>{friend.user_id_1.name}</b> has send you a friend request
         <hr />
              <p class="time">3 hours</p>
            </div>
          </li>)
      }
      else {
        return <center><h4>You don't have notification</h4></center>
      }
    })
    //notification function 
    const friendRequest = this.state.friendrequest.map(friend => {
      return (
        <li>
          <div class="col-md-4 col-sm-4 col-xs-4"><div class="notify-img"><img src={"http://localhost:3030/image/" + friend.user_id_1.image} alt="" className="img-circle" width="60px" height="60px" /></div></div>
          <div class="col-md-8 col-sm-8 col-xs-8"><h6><b>{friend.user_id_1.name}</b></h6>
            <button onClick={this.confirmRequest.bind(this,friend._id)}  className="btn btn-primary">Confirm</button>
            <button onClick={this.deleteRequest.bind(this,friend._id)} className="btn btn-default" style={{ marginLeft: 10 }}>Cancel</button>
          </div>
        </li>
      )


    })
    return (

      <header id="aa-header" >
        <div className="aa-header-menu ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">

                  <div className="aa-logo">

                    <a href="/">
                      <span className="fa fa-travel"></span>
                      <p>Journey<strong>Mate</strong> <span>Travel with new Friends</span></p>
                    </a>

                  </div>
                  <div className="aa-search-box">

                    <form action="">
                      <input type="text" name="" id="" placeholder="Search" />
                      <button type="submit"><span className="fa fa-search" /></button>
                    </form>
                  </div>

                  <div className="col-md-5 aa-menu-box">
                    <div className="navbar" role="navigation">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <i className="fal fa-ellipsis-v"></i>
                        </button>
                      </div>
                      <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                          <li><a href="/trip"><i className="fal fa-plane-alt"></i></a></li>


                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fal fa-user-plus"> </i></a>
                            <ul class="dropdown-menu notify-drop" >
                              <div class="notify-drop-title">
                                <div class="row">
                                  <div class="col-md-6 col-sm-6 col-xs-6">Friend Request</div>
                                  <div class="col-md-6 col-sm-6 col-xs-6 text-right"><a href="" class="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="tümü okundu."><i class="fa fa-dot-circle-o"></i></a></div>
                                </div>
                              </div>
                              <div class="drop-content">
                              {this.state.friendrequest == "" ? <center><h4>you don't have any request!</h4></center> : friendRequest}
                              </div>
                            </ul>
                          </li>

                          <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fal fa-bell"> </i></a>
                            <ul class="dropdown-menu notify-drop">
                              <div class="notify-drop-title">
                                <div class="row">
                                  <div class="col-md-6 col-sm-6 col-xs-6">Notification</div>
                                  <div class="col-md-6 col-sm-6 col-xs-6 text-right"><a href="" class="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="tümü okundu."><i class="fa fa-dot-circle-o"></i></a></div>
                                </div>
                              </div>
                              <div class="drop-content">
                                {friendNotification}
                              </div>

                            </ul>
                          </li>

                          <li><a href="#"><i className="fal fa-cog"> </i></a>
                            <ul className="dropdown-menu">
                              <li><a href="/profile">Profile</a></li>
                              <li><a href="/Changepassword">Change Password</a></li>
                              <li><a href="/" onClick={this.handleLogout}>Logout</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    )
  }
}

export default withRouter(HeaderLogin);