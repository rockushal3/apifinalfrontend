import React, { Component } from 'react'
import axios from 'axios'
import Success from './success';
import Error from './error';
import { Animated } from "react-animated-css";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      'dob': '',
      'email': '',
      'gender': '',
      'name': '',
      'lname': '',
      'phone': '',
      'password': '',
      'confirmpassword':'',
      error:'',
      errormessage:'',
      isRegisterIn: ''
    }
  }

  sendUser = () => {
    if(this.validation()){
    const data = {
      name: this.state.name + " " + this.state.lname,
      email: this.state.email,
      gender: this.state.gender, 
      phone: this.state.phone,
      dob: this.state.dob,
      password: this.state.password

    };
    axios.post('http://localhost:3030/createUser', data).then((response) => {
      this.setState({ isRegisterIn: true })
    })
  }
  }

  validation=()=>{
    if(!this.state.name){
      this.setState({
        error:true,
        errormessage:'First Name cannot be empty'
      })
      return false
    }
    if(this.state.lname==''){
      this.setState({
        error:true,
        errormessage:'Last Name cannot be empty'
      })
      return false
    }
    if(this.state.phone==''){
      this.setState({
        error:true,
        errormessage:'Phone cannot be empty'
      })
      return false
    }
    if(this.state.email==''){
      this.setState({
        error:true,
        errormessage:'Email cannot be empty'
      })
      return false
    }
    if(!this.state.email.includes('@')){
      this.setState({
        error:true,
        errormessage:'Incorrect Email'
      })
      return false
    }
    if(this.state.password==''){
      this.setState({
        error:true,
        errormessage:'Password cannot be empty'
      })
      return false
    }
    if(!this.state.password==this.state.confirmpassword){
      this.setState({
        error:true,
        errormessage:'Missmatch password'
      })
      return false
    }
    if(this.state.dob==''){
      this.setState({
        error:true,
        errormessage:'Birthday cannot be empty'
      })
      return false
    }
    if(this.state.gender==''){
      this.setState({
        error:true,
        errormessage:'Gender cannot be empty'
      })
      return false
    }
    return true
  }

  render() {


    return (
      <section id="aa-banner" style={{minHeight: "80vh"}}>
        {this.state.isRegisterIn == true ? <Success message="user has been register" /> : null}
        {this.state.error == true ? <Error message={this.state.errormessage} /> : null}
        
        <div className="container">
          <div className="row">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

            <div className="col-md-6 ">
              <br />
              <h2 className="blackbold-text">Connect with friends. Plan and find<br /> friends for travelling world</h2>
              <br/><br/>
              <img src="img/home.png" className="img-responsive"/>
            </div>
            </Animated>
          <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

            <div className="col-md-6">
              <br />
              <h2 className="blackbold-text">Sign Up</h2>
              <p>It's Quick and Easy</p>
              <form >
                <div className="form-group">
                  <div className="col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <input className="form-control" value={this.state.name} onChange={(event) =>
                      this.setState({ name: event.target.value })} type="text" placeholder="First Name" required/>
                  </div>
                  <div className="col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <input className="form-control" value={this.state.lname} onChange={(event) =>
                      this.setState({ lname: event.target.value })} type="text" placeholder="Last Name" required/>
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-control" value={this.state.phone} onChange={(event) =>
                    this.setState({ phone: event.target.value })} type="text" placeholder="Phone" required/>
                  <input className="form-control" value={this.state.email} onChange={(event) =>
                    this.setState({ email: event.target.value })} type="text" placeholder="E-mail" required/>
                  <input className="form-control" value={this.state.password} onChange={(event) =>
                    this.setState({ password: event.target.value })} type="password" placeholder="Password" required/>
                  <input className="form-control"value={this.state.confirmpassword} onChange={(event) =>
                    this.setState({ confirmpassword: event.target.value })}  type="password" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                  <label for="Birthday">Birthday:</label><br />
                  <input type="date" value={this.state.dob} onChange={(event) =>
                    this.setState({ dob: event.target.value })} className="form-control" name="dob" required/>

                </div>
                <div className="form-group">
                  <label for="Gender">Gender:</label><br />
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event) =>
                      this.setState({ gender: "Male" })} name="gender" />Male</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event) =>
                      this.setState({ gender: "Female" })} name="gender" />Female</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event) =>
                      this.setState({ gender: "Others" })} name="gender" />Others</label>
                  </div>
                </div>
                <p className="policy">By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <div className="form-group">
                  <button className="btn" onClick={this.sendUser}>Sign Up</button>
                </div>

              </form>
            </div>
            </Animated>
          </div>
        </div>
      </section>
    )
  }
}
export default Home;