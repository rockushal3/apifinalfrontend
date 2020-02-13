import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchresult: []
    }
  }
componentDidMount() {
    axios.get('http://localhost:3030/search?trip_name='+this.props.search, this.state.config)
      .then((response) => {
        this.setState({
            searchresult: response.data
        })
        console.log(response.data)
    })
}
  render() {
   
    const searchdesign = this.state.searchresult.map(search => {
      return (<div class="col-md-6 m-b-2">
      <div class="p-10 bg-white">
         <div class="media media-xs overflow-visible">
            <a class="media-left" href="javascript:;">
               <img src={"http://localhost:3030/image/"+search.user_id.image } alt="" width="45px" height="45px" class="media-object img-circle" />
            </a>
            <div class="media-body valign-middle">
               <a href={"/usersprofile/+search.user_id._id"}> <b class="text-inverse">{search.user_id.name}</b></a>
               <p >{search.user_id.address}</p>
            </div>
            <div class="media-body valign-middle text-right overflow-visible">
               <div class="btn-group dropdown">
                  <a href={"/usersprofile/"+search.user_id._id} class="btn btn-default">View Profile</a>
               </div>
            </div>
         </div>
      </div>
   </div>)
    })
     
    return (
      <section id="aa-banner" style={{minHeight: "80vh"}}>
        <div className="container">
          <br></br>
          <div className="row">
            <div className=" col-md-offset-2 col-md-10">
        <h2>Search Result</h2>
        {searchdesign}
        </div>
        </div>
        </div>
      </section>
    )
  }
}
export default Search;