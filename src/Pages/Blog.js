import React, { Component } from "react";
import "./main.css";
import client from "./Client";
import { Link } from "react-router-dom";

class Blog extends Component {
	constructor() {
		super();
		this.state = { blogpage: [] };
	}
	componentDidMount() {
		client
			.getEntries({
				content_type: "blog",
				order: "-sys.createdAt",
			})
			.then((entries) => {
				this.setState({ blogpage: entries.items });
			});
	}
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
							{this.state.blogpage.map((item, index) => {
								return (
									<div key={index} className="col-md-6 blog-content">
										<img src={item.fields.blogThumbnail.fields.file.url} alt="" className="img-blog img-fluid" />
										<h3>
											<Link to={`../Blog/${item.fields.slug}`}> 
											{item.fields.blogTitle}
											</Link>
										</h3>
										<p>
											{item.fields.blogDescription}
										</p>
										<button className="btn btn-primary"> 	<Link to={`../Blog/${item.fields.slug}`}> Read More .... 	</Link></button>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Blog;
