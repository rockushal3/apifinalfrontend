import React, { Component } from 'react';

class Home extends Component {
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
                    <input className="form-control" type="text" placeholder="First Name" />
                  </div>
                  <div className="col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <input className="form-control" type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Phone" />
                  <input className="form-control" type="text" placeholder="E-mail" />
                  <input className="form-control" type="password" placeholder="Password" />
                  <input className="form-control" type="password" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                  <label for="Birthday">Birthday:</label><br />
                  <input type="date" className="form-control" name="dob" />

                </div>
                <div className="form-group">
                  <label for="Gender">Gender:</label><br />
                  <div className="radio-inline">
                    <label><input type="radio" name="gender" checked />Male</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" name="gender" />Female</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" name="gender" />Others</label>
                  </div>
                </div>
                <p className="policy">By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <div className="form-group">
                  <button className="btn ">Sign Up</button>
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