import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="aa-footer">
        <div className="aa-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-footer-bottom-area">
                  <p>Designed by <a href="http://www.kushalstha.com.np/">kushalstha.com.np</a></p>
                  <div className="aa-footer-payment" style={{color:"#888"}}>
                  © 2020 JOURNEYMATE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}
export default Footer;