import React, { Component } from 'react';
import axios from 'axios'
import Error from '../components/error';
import Success from '../components/success';


class ChnagePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldpassword: '',
            newpassword: '',
            confirmpassword: '',
            error: '',
            errormessage: '',
            success: '',
            successmessage: '',
            user: '',
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
                })
            })
    }

    updatepassword = () => {
        if (this.state.oldpassword == this.state.user.password) {
            if (this.state.confirmpassword == this.state.newpassword) {
                const formdata = {
                    password: this.state.newpassword
                }
                axios.put("http://localhost:3030/updateUser/" + this.state.user._id, formdata, this.state.config).then((response) => {
                    this.setState({
                        oldpassword: '',
                        newpassword: '',
                        confirmpassword: '',
                        success: true,
                        successmessage: 'Password is successfully changed'
                    })
                })
            }
            else {
                this.setState({
                    error: true,
                    errormessage: 'password mismatch'
                })
            }
        }
        else {
            this.setState({
                error: true,
                errormessage: 'incorrect password'
            })
        }
    }

    // form handler
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.error == true ? <Error message={this.state.errormessage} /> : null}
                {this.state.success == true ? <Success message={this.state.successmessage} /> : null}

                <div className="row">
                    <div className="col-md-offset-3 col-md-6" style={{ height: "79vh" }} >
                        <h1>Change Password</h1>
                        <div className="form-group center-block" style={{ margin: "0 auto" }}>
                            <label for="caption">Old Password:</label><br />
                            <input className="form-control" style={{ width: "100%" }} name="oldpassword" value={this.state.oldpassword} onChange={this.handleChange} type="password" placeholder="Old Password" />
                            <label for="image">New Password:</label><br />
                            <input className="form-control" style={{ width: "100%" }} name="newpassword" value={this.state.newpassword} onChange={this.handleChange} type="password" placeholder="New Password" />
                            <label for="image">Confirm Password:</label><br />
                            <input className="form-control" style={{ width: "100%" }} name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} type="password" placeholder="Confirm Password" /><br /><br />
                            <button onClick={this.updatepassword} className="btn btn-primary">Change Password</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
export default ChnagePassword;