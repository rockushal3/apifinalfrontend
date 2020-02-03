import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
class Header extends Component {
  //variable
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    } 
    
    this.state = {
          config: {
              headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
      }
  
  }

  componentDidMount() {
    axios.get('http://localhost:3030/checkLogin', this.state.config)
        .then((response) => {
            this.setState({ isLoggedIn: true })
        });
}

 // form handler
  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  //login function  handler 
  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/login', this.state)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({ isLoggedIn: true })
      }).catch((err) => console.log(err.response))
    this.setState({ email: '', password: '' })
  }
 

  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to='/newsfeed' />
    }
    return (
      <header id="aa-header" >
        <div className="aa-header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">

                  <div className="aa-logo">

                    <a href="index.html">
                      <span className="fa fa-travel"></span>
                      <p>Journey<strong>Mate</strong> <span>Travel with new Friends</span></p>
                    </a>
                  </div>

                  <div className="aa-search-box">

                    <div className="aa-login">

                      <form>

                        <input type="text" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.handleChange} />

                        <input type="password" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        <button type="submit" onClick={this.submitForm}>Login</button>
                      </form>
                    </div>
                    <a href="/newsfeed">Forget Password?</a>
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
export default Header;