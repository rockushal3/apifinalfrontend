import React,{Component} from 'react';

class HeaderLogin extends Component {
    render(){

   
return(
    <header id="aa-header" >
    <div className="aa-header-menu">
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
                  
                <form action="">
                  <input type="text" name="" id="" placeholder="Search"/>
                  <button type="submit"><span className="fa fa-search"/></button>
                </form>
            
                
              </div>
            
              <div className="col-md-5 aa-menu-box">
           <div className="navbar" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <i className="fal fa-ellipsis-v"></i>
            </button>          
          </div>
                <div className="navbar-collapse collapse">
                  
                    <ul className="nav navbar-nav">
                      <li><a href=""><i className="fal fa-plane-alt"></i></a></li>
                      
                      <li><a href="#"><i className="fal fa-user-plus"></i>
                      
                      </a>
                        <ul className="dropdown-menu">                
                                          
                          </ul>
                    </li>
                
                      <li><a href="#"><i className="fal fa-bell"> </i></a>
                        <ul className="dropdown-menu">                
                                      
                          </ul>
                    </li>
                      <li><a href="#"><i className="fal fa-cog"> </i></a>
                        <ul className="dropdown-menu">                
                          <li><a href="">Profile</a></li>
                          <li><a href="">Setting</a></li>                
                          <li><a href="">Logout</a></li>                
                        </ul>
                      </li>
                    </ul>
                  </div>
            
               </div> 
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
export default HeaderLogin;