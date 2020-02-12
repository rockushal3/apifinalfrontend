import React, { Component } from 'react';
import SugestedFriend from './sugesstedfriend';
import Success from './success';
import axios from 'axios'
import {Animated} from "react-animated-css";

class TripList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
      user: {},
      users: [],
      location:"",
      success_message:"",
      date:"",
      description:"",
      location_edit:"",
      date_edit:"",
      description_edit:"",
      edit_id:"",
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
    axios.get('http://localhost:3030/checkLogin', this.state.config)
      .then((response) => {
        this.setState({
          user: response.data
        })
        axios.get("http://localhost:3030/findTripByUserId/" + this.state.user._id).then((res) => {
          this.setState({ trips: res.data });
        })
      })
  }

    //  form handler
     handleChange = (e) => {
      this.setState(
        { [e.target.name]: e.target.value }
      )
    }

    addtrip = ()=> {
      const formdata = {
        user_id:this.state.user._id,
        trip_name:this.state.location,
        description:this.state.description,
        date:this.state.date
  
      }
  
      axios.post('http://localhost:3030/trip', formdata, this.state.config).then((response) => {
        this.setState({
          success_message: true
        })
  
        window.location.reload();
  
      }).catch(function () {
      })
    }
    
    tripdelete =(id)=> {
      axios.delete("http://localhost:3030/trip/"+id, this.state.config).then((response) => {
        this.setState({
          success_message: true
          
        }) 
        window.location.reload();

      }).catch(function (e) {
      })
    }

    getTripdetail=(id)=>{
      axios.get("http://localhost:3030/trip/"+id, this.state.config).then((response) => {
        this.setState({
        description_edit:response.data.description,
        location_edit:response.data.trip_name,
        date_edit:response.data.date,
        edit_id:response.data._id
        })
      }).catch(function (e) {
      })

    }
    updatetrip=()=>{
      const formdata = {
        trip_name:this.state.location_edit,
        description:this.state.description_edit,
        date:this.state.date_edit
  
      }
  
      axios.put("http://localhost:3030/trip/"+this.state.edit_id,formdata, this.state.config).then((response) => {
        
        window.location.reload();
    })
    }
  

  render() {
    const sugestedfriend = this.state.users.map(user1 => {
      return <SugestedFriend userlist={user1} loginuser={this.state.user.name} />
    })
    const tripslist = this.state.trips.map((tripe, index) => {
      if (index % 2 == 0) {
        return (
        <div class="timeline">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div class="timeline-content left wobble">
            <span class="timeline-icon"></span>
            <span class="date">{tripe.date}</span>
            <h2 class="title">{tripe.trip_name}</h2>
            <p class="description">
              {tripe.description}
              <br/>
              <button type="submit" onClick={this.tripdelete.bind(this,tripe._id)} className="btn btn-primary-outline" ><i className="fa fa-trash"></i></button>
              <button onClick={this.getTripdetail.bind(this,tripe._id)}  data-toggle="modal" data-target="#model_1"  className="btn btn-primary-outline" ><i className="fa fa-edit"></i></button>  
            </p>
          </div>
          </Animated>
        </div>
        )

      }
      else {
        return (<div class="timeline">
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
          <div class="timeline-content right">
            <span class="timeline-icon"></span>
            <span class="date">{tripe.date}</span>
            <h2 class="title">{tripe.trip_name}</h2>
            <p class="description">
              {tripe.description}
              <br/>
              <button className="btn btn-primary-outline" onClick={this.tripdelete.bind(this,tripe._id)}><i className="fa fa-trash"></i></button>
              <button onClick={this.getTripdetail.bind(this,tripe._id)}  data-toggle="modal" data-target="#model_1"  className="btn btn-primary-outline" ><i className="fa fa-edit"></i></button>        
            </p>
          </div>
          </Animated>
        </div>)
      }


    })
    return (
      <section id="aa-blog-archive">
        {this.state.success_message == true ? <Success message="Trip successfully uploaded" /> : null}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-blog-archive-area">
                <div className="row">
                  
                  <div class="col-md-8 gedf-main">
                    <center><h2>Your Trips</h2></center>
                    <div class="main-timeline">

                      {tripslist}

                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card">
                          <article className="card-group-item">

                            <header className="card-header"><div className="col-md-4"><img src={"http://localhost:3030/image/" + this.state.user.image} style={{ marginTop: 10, marginRight: 10 }} className="img-circle" width="50px" height="50px" style={{ marginBottom: 20 }} />
                            </div><div className="col-md-8"><b>@{this.state.user.name}</b><br /> {this.state.user.address}</div></header>
                            <br /><a className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{ backgroundColor: '#2699FB', width: "100%" }}>Add Trip</a>

                            <div id="myModal" class="modal fade" role="dialog">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Your Next Trip</h4>
                                  </div>
                                  <div className="modal-body">
                                    <form >
                                    <div className="form-group">
                                        <label for="caption">Trip Date:</label><br />
                                        <input className="form-control" name="date" value={this.state.date} onChange={this.handleChange} type="date"  placeholder="Trip Date" />
                                        <label for="image">Location:</label><br />
                                        <input className="form-control" name="location" value={this.state.location} onChange={this.handleChange} type="text" placeholder="Location" />
                                        <label for="image">description:</label><br />
                                        <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" onClick={this.addtrip} placeholder="Say about your trip" className="btn btn-primary">Upload</button>
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
                              {sugestedfriend}

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
        <div id="model_1" class="modal fade" role="dialog">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Your Next Trip</h4>
                                  </div>
                                  <div className="modal-body">
                                    <form >
                                    <div className="form-group">
                                        <label for="caption">Trip Date:</label><br />
                                        <input className="form-control" type="date" name="date_edit" value={this.state.date_edit} onChange={this.handleChange} placeholder="Trip Date" />
                                        <label for="image">Location:</label><br />
                                        <input className="form-control" name="location_edit" value={this.state.location_edit} onChange={this.handleChange}  type="text" placeholder="Location" />
                                        <label for="image">description:</label><br />
                                        <textarea className="form-control" name="description_edit" value={this.state.description_edit} onChange={this.handleChange} >{this.state.description_edit}</textarea>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" onClick={this.updatetrip} placeholder="Say about your trip" className="btn btn-primary">Update</button>
                                  </div>
                                </div>
                              </div>
                            </div>
      </section>
    )
  }
}
export default TripList;