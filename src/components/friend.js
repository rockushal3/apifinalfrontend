import React, { Component } from 'react';

class Friend extends Component {
    render() {
        return (
            <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
               <div class="media media-xs overflow-visible">
                  <a class="media-left" href="javascript:;">
                  <img src={"http://localhost:3030/image/"+this.props.userdetail.image} alt="" width="45px" height="45px" class="media-object img-circle"/>
                  </a>
                  <div class="media-body valign-middle">
                    <b class="text-inverse">{this.props.userdetail.name}</b>
                    <p >{this.props.userdetail.address}</p>
                  </div>
                  <div class="media-body valign-middle text-right overflow-visible">
                     <div class="btn-group dropdown">
                        <a class="btn btn-default">Friends</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            
        )
    }s
}
export default Friend;