import React, { Component } from 'react';
import Post from './post';
import axios from 'axios';
class Userprofile extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          post:[],
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
            axios.get('http://localhost:3030/findpostById/'+this.state.user._id, this.state.config)
            .then((response) => {
              this.setState({
                post: response.data
                
              })
              console.log(this.state.post)
           
          });
    
        })
      }
    render() {
        
        return (
            <div className="container" >
            <div className="row my-2" style={{paddingTop:130}}>
            <div className="col-lg-4 order-lg-1 text-center">
                    <img src={"http://localhost:3030/image/"+this.state.user.image} width="150px" height="150px" className="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                    <br/>
                    <h4><b>{this.state.user.name}</b></h4>
                    <label className="custom-file">
                        <button className="btn btn-primary">Update Profile</button>
                        <button className="btn btn-primary"style={{marginLeft:10}}>Update Cover</button>

                        
                    </label>
                </div>
                <div className="col-lg-8 order-lg-2 user-post">
                    <div classNameName="col-lg-12">
                    <img src={"http://localhost:3030/image/"+this.state.user.coverimage} className="img-responsive" width="100%" />
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="" data-target="#messages" data-toggle="tab" className="nav-link">Friends</a>
                        </li>
                        <li className="nav-item">
                            <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                        </li>
                    </ul>
                    <div className="tab-content py-4">
                        <div className="tab-pane active" id="profile">
                            <h5 className="mb-3">User Profile</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Address</h6>
                                    <p>
                                    {this.state.user.address}
                                    </p>
                                    <h6>Phone</h6>
                                    <p>
                                    {this.state.user.phone}
                                    </p>
                                    <h6>Birthday</h6>
                                    <p>
                                    {this.state.user.dob}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h6>E-Mail</h6>
                                   <p>{this.state.user.email}</p>
                                   <h6>Gender</h6>
                                   <p>{this.state.user.gender}</p>
                                </div>
                                <div className="col-md-12">
                                <h5 className="mb-3">User Posts</h5>
                                   {/* {postdesign} */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="messages">
                            <div className="alert alert-info alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
                            </div>
                            <table className="table table-hover table-striped">
                                <tbody>                                    
                                    <tr>
                                        <td>
                                           <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus. 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus. 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros. 
                                        </td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                        <div className="tab-pane" id="edit">
                            <form role="form">
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Full Name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value="Jane"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email" value="email@gmail.com"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">DOB</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="date" value=""/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Phone</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="url" value=""/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value="" placeholder="Address"/>
                                    </div>
                                </div>
                                
                            
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Gender</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value="janeuser"/>
                                    </div>
                                </div>
                               
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <input type="button" className="btn btn-primary" value="Save Changes"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
        )
    }s
}
export default Userprofile;