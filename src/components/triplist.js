import React, { Component } from 'react';
import axios from 'axios'

class TripList extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
          trips:[],
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
              user: response.data
            })
            axios.get("http://localhost:3030/findTripByUserId/" + this.state.user._id).then((res) => {
              this.setState({ trips: res.data });
            })
          })
      }
    render() {
        const tripslist = this.state.trips.map((tripe,index) => {
                if(index%2==0){
                    return (<div class="timeline">
                    <div class="timeline-content left">
                        <span class="timeline-icon"></span>
                        <span class="date">{tripe.date}</span>
                        <h2 class="title">{tripe.trip_name}</h2>
                        <p class="description">
                            {tripe.description}
                        </p>
                    </div>
                </div>)

                }
                else{
                    return(<div class="timeline">
                    <div class="timeline-content right">
                        <span class="timeline-icon"></span>
                        <span class="date">{tripe.date}</span>
                        <h2 class="title">{tripe.trip_name}</h2>
                        <p class="description">
                        {tripe.description}
                        </p>
                    </div>
                </div>)
                }
           

        })
        return (
            <div className="container">
                <center><h3><b>Trips</b></h3></center>
           <div class="main-timeline">
    
           {tripslist}
    
        </div>
        </div>
        
        )
    }
}
export default TripList;