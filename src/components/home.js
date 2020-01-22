import React, { Component } from 'react'
import axios from 'axios'

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
      'password': ''
    }
  }

  sendUser = () => {
    const data = {
      name: this.state.name + " " + this.state.lname,
      email: this.state.email,
      gender: this.state.gender, 
      phone: this.state.phone,
      dob: this.state.dob,
      password: this.state.password

    };
    axios.post('http://localhost:3030/createUser', data)
  }

  render() {


    return (
      <section id="aa-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <br />
              <h2 className="blackbold-text">Connect with friends. Plan and find<br /> friends for travelling world</h2>
            </div>
            <div className="col-md-6">
              <br />
              <h2 className="blackbold-text">Sign Up</h2>
              <p>It's Quick and Easy</p>
              <form >
                <div className="form-group">
                  <div className="col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <input className="form-control" value={this.state.name} onChange={(event) =>
                      this.setState({ name: event.target.value })} type="text" placeholder="First Name" />
                  </div>
                  <div className="col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <input className="form-control" value={this.state.lname} onChange={(event) =>
                      this.setState({ lname: event.target.value })} type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-control" value={this.state.phone} onChange={(event) =>
                    this.setState({ phone: event.target.value })} type="text" placeholder="Phone" />
                  <input className="form-control" value={this.state.email} onChange={(event) =>
                    this.setState({ email: event.target.value })} type="text" placeholder="E-mail" />
                  <input className="form-control" value={this.state.password} onChange={(event) =>
                    this.setState({ password: event.target.value })} type="password" placeholder="Password" />
                  <input className="form-control" type="password" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                  <label for="Birthday">Birthday:</label><br />
                  <input type="date" value={this.state.dob} onChange={(event) =>
                    this.setState({ dob: event.target.value })} className="form-control" name="dob" />

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
          </div>
        </div>
      </section>
    )
  }
}
export default Home;