import React, { Component } from 'react';

class ChnagePassword extends Component {

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6" style={{ height: "79vh" }} >
                        <h1>Change Password</h1>
                        <div className="form-group center-block" style={{ margin: "0 auto" }}>
                            <label for="caption">Old Password:</label><br />
                            <input className="form-control" style={{width:"100%"}} type="password" placeholder="Old Password" />
                            <label for="image">New Password:</label><br />
                            <input className="form-control" style={{width:"100%"}} type="password" placeholder="New Password" />
                            <label for="image">Confirm Password:</label><br />
                            <input className="form-control" style={{width:"100%"}} type="password" placeholder="Confirm Password" /><br/><br/>
                            <button className="btn btn-primary">Change Password</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
export default ChnagePassword;