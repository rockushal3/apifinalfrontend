import React, { Component } from 'react';
import Post from './post';
import Friend from './friend';
import axios from 'axios';
class Userprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profileimage: '',
            coverimage: '',
            name:'',
            email:'',
            phone:'',
            gender:'',
            dob:'',
            address:'',
            friends:[],
            post: [],
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
                    user: response.data,
                    name:response.data.name,
                    email:response.data.email,
                    phone:response.data.phone,
                    gender:response.data.gender,
                    dob:response.data.dob,
                    address:response.data.address
                })
                axios.get('http://localhost:3030/findpostByUserId/' + this.state.user._id, this.state.config)
                    .then((response) => {
                        this.setState({
                            post: response.data
                        })
                    })
                axios.get('http://localhost:3030/allfriend/' + this.state.user._id)
                    .then((response) => {
                        this.setState({
                            friends: response.data
                        })
                    })

            })
    }

     // form handler
  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

    sendprofilepic = () => {
        let formdata = new FormData();
        formdata.append('image',this.state.profileimage[0])
        console.log(this.state.profileimage[0])
        axios.put('http://localhost:3030/updateProfile/'+ this.state.user._id, formdata,this.state.config).then(function(){
          window.location.reload();
        })
      }

      sendcover = () => {
        let formdata = new FormData();
        formdata.append('image',this.state.coverimage[0])
        axios.put('http://localhost:3030/updateCover/'+ this.state.user._id, formdata,this.state.config).then(function(){
          window.location.reload();
        })
      }

      sendprofile = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender, 
            phone: this.state.phone,
            dob: this.state.dob,
            address: this.state.address
      
          }
        axios.put('http://localhost:3030/updateUser/'+ this.state.user._id, data,this.state.config).then(function(){
          window.location.reload();
        })
      }
    render() {
        //post design foreach loop
        const postdesign = this.state.post.map(post => {
            return <Post posts={post} />
        })

        const friendlist = this.state.friends.map(friend => {
            if(friend.user_id_1._id==this.state.user._id){
            return <Friend userdetail={friend.user_id_2} />
            }
            else{
                return <Friend userdetail={friend.user_id_1} />
            }
        })
        
        return (
            <div className="container" >
                <div className="row my-2" style={{ paddingTop: 130 }}>
                    <div className="col-lg-4 order-lg-1 text-center">
                        <img src={"http://localhost:3030/image/" + this.state.user.image} width="150px" height="150px" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                        <br />
                        <h4><b>{this.state.user.name}</b></h4>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Update Profile</button>
                        <div id="myModal" class="modal fade" role="dialog">
                            <div className="modal-dialog">

                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Update Profile</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <div className="form-group">

                                                <label for="image">Image:</label><br />
                                                <input className="form-control" type="file" onChange={(event) =>
                                                    this.setState({ profileimage: event.target.files })} placeholder="Upload Image" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={this.sendprofilepic} className="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{ marginLeft: 10 }} data-toggle="modal" data-target="#myModal1">Update Cover</button>
                        <div id="myModal1" class="modal fade" role="dialog">
                            <div className="modal-dialog">

                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Update Cover</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <div className="form-group">

                                                <label for="image">Image:</label><br />
                                                <input className="form-control" type="file" onChange={(event) =>
                                                    this.setState({ coverimage: event.target.files })} placeholder="Upload Image" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={this.sendcover} className="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-8 order-lg-2 user-post">
                        <div classNameName="col-lg-12">
                            <img src={"http://localhost:3030/image/" + this.state.user.coverimage} className="rounded img-fluid" style={{maxHeight:"400px "}} width="100%" />
                        <br/>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item active">
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
                            <h3 className="mb-3 color-blue"><b>User Detail</b></h3>
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
                            <h3 className="mb-3 color-blue"><b>Edit User</b></h3>
                                <form role="form">
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Full Name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">DOB</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="dob" type="text" value={this.state.dob} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Phone</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Gender</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" name="gender" type="text" value={this.state.gender} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label"></label>
                                        <div className="col-lg-9">
                                            <input type="button" onClick={this.sendprofile} className="btn btn-primary" value="Save Changes" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    } s
}
export default Userprofile;