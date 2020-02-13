import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div class="alert alert-dismissable alert-danger" style={{position: "fixed", zIndex: 10003, bottom: 30, right: 40}}>
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <strong>{this.props.message}</strong></div>
            
        )
    }s
}
export default Error;