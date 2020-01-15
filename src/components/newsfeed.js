import React, { Component } from 'react';
import Post from './post';
class Newsfeed extends Component {

  render() {
    //post design foreach loop
    const postdesign = this.props.post.map(post => {
      return <Post posts={post} />
    })

    return (

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
                    {postdesign}
                  </div>
                  <div className="col-md-3 related-post">
                    <aside className="aa-blog-sidebar">
                      <div className="aa-sidebar-widget">
                        <h3>People You May Know</h3>
                        <div className="aa-recently-views">
                          <ul>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
                              <div className="aa-cartbox-info">
                                <h4><a href="#">Kushal Shrestha</a></h4>
                                <p><button className="btn btn-default">Send Request</button></p>
                              </div>
                            </li>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
                              <div className="aa-cartbox-info">
                                <h4><a href="#">Kushal Shrestha</a></h4>
                                <p><button className="btn btn-default">Send Request</button></p>
                              </div>
                            </li>
                            <li>
                              <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" width="50px" className="img-responsive" alt="img" /></a>
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