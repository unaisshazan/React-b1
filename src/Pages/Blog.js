import React, { Component } from "react";
import blog1 from '../images/blog/blog1.jpg'
import blog2 from '../images/blog/blog2.jpg'
class Blog extends Component {
	render() {
		return (
			<div>
				<section className="pt-4">
					<div className="container">
						<div className="text-center">
							<h2>Blogs</h2>
							<p className="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
	
							</p>

						</div>
                        <div className="row"> 
                        <div className="col-md-6">
                       <img src={blog1} alt="" />
                        </div>
                        <div className="col-md-6">
                        <img src={blog2} alt="" />
                            </div>
                         </div>
					</div>
				</section>
			</div>
		);
	}
}

export default Blog;
