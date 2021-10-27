import React, { Component } from "react";
import blog1 from "../images/blog/blog1.jpg";
import blog2 from "../images/blog/blog2.jpg";
import "./main.css";
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
							<div className="col-md-6 blog-content">
								<img src={blog1} alt=""  className="img-blog"/>
								<h3>
								
									<a href="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</a>
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Illum, repellat fuga! Consequuntur repellat sed facere autem
									non eius aliquid voluptatem, repudiandae molestiae, voluptatum
									dignissimos aperiam blanditiis consectetur perferendis nisi
									libero.
								</p>
								<button className="btn btn-primary"> Read More ....</button>
							</div>
							<div className="col-md-6">
							<img src={blog2} alt=""  className="img-blog"/>
								<h3>
								
									<a href="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</a>
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Illum, repellat fuga! Consequuntur repellat sed facere autem
									non eius aliquid voluptatem, repudiandae molestiae, voluptatum
									dignissimos aperiam blanditiis consectetur perferendis nisi
									libero.
								</p>
								<button className="btn btn-primary"> Read More ....</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Blog;
