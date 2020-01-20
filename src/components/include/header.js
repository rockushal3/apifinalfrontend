import React,{Component} from 'react';
class Header extends Component {
    render(){

   
return(
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
                    
                <form action="">
                  
                  <input type="text" name="" id="" placeholder="Username/Email"/>
                  
                  <input type="password" name="" id="" placeholder="Password "/>
                  <button type="submit">Login</button>
                </form>
            </div>
                <a href = "/newsfeed">Forget Password?</a>
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