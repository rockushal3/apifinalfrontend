import React,{Component} from 'react';

class Newsfeed extends Component {
    render(){

   
return(
    
    <section id="aa-blog-archive">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-blog-archive-area">
              <div className="row">
                <div className="col-md-2 related-post">
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary">ADD POST</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                 
              <div className="row post">
                <div className="col-md-12">
                <img src="img/woman-small-1.jpg" className="img-circle" width="50px"/>
                <a href="">Kushal Shrestha</a>
                <a href="" className="float-right font-big"><i className="fa fa-ellipsis-h"></i></a>
              </div>
              <div className="col-md-12">
                <p>Caption is here</p>
              </div>
                <div className="col-md-12">
                  <img src="img/fashion/1.jpg" className="img-responsive post-img" width="100%"/>
                </div>
            </div>
          
            <div className="row post">
              <div className="col-md-12">
              <img src="img/woman-small-1.jpg" className="img-circle" width="50px"/>
              <a href="">Kushal Shrestha</a>
              <a href="" className="float-right font-big"><i className="fa fa-ellipsis-h"></i></a>
            </div>
            <div className="col-md-12">
              <p>Caption is here</p>
            </div>
              <div className="col-md-12">
                <img src="img/fashion/1.jpg" className="img-responsive post-img" width="100%"/>
              </div>
          </div>
        
                </div>
  
               
                <div className="col-md-3 related-post">
                  <aside className="aa-blog-sidebar">
                    <div className="aa-sidebar-widget">
                      <h3>People You May Know</h3>
                      <div className="aa-recently-views">
                        <ul>
                          <li>
                            <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img"/></a>
                            <div className="aa-cartbox-info">
                              <h4><a href="#">Kushal Shrestha</a></h4>
                              <p><button className="btn btn-default">Send Request</button></p>
                            </div>                    
                          </li>
                          <li>
                            <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img"/></a>
                            <div className="aa-cartbox-info">
                              <h4><a href="#">Kushal Shrestha</a></h4>
                              <p><button className="btn btn-default">Send Request</button></p>
                            </div>                    
                          </li>
                          <li>
                            <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img"/></a>
                            <div className="aa-cartbox-info">
                              <h4><a href="#">Kushal Shrestha</a></h4>
                              <p><button className="btn btn-default">Send Request</button></p>
                            </div>                    
                          </li>                               
                        </ul>
                      </div>                            
                    </div>
                  </aside>
                </div>
              </div>           
            </div>
          </div>
        </div>
      </div>
    </section>
)
}
}
export default Newsfeed;