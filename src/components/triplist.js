import React, { Component } from 'react';

class TripList extends Component {
    render() {
        return (
            <div className="container">
           <div class="main-timeline">
    <div class="timeline">
        <div class="timeline-content left">
            <span class="timeline-icon"></span>
            <span class="date">Mar 2017</span>
            <h2 class="title">Web Design</h2>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum quam sit amet semper egestas. In rhoncus justo sit amet.
            </p>
        </div>
    </div>
 
    <div class="timeline">
        <div class="timeline-content right">
            <span class="timeline-icon"></span>
            <span class="date">Mar 2017</span>
            <h2 class="title">Web Development</h2>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum quam sit amet semper egestas. In rhoncus justo sit amet.
            </p>
        </div>
    </div>
        </div>
        </div>
        
        )
    }
}
export default TripList;