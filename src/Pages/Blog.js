import React, { Component } from "react";
import "./main.css";
import client from './Client'

class Blog extends Component {
	constructor(){
		super()
		this.state= { blogpage:[]}
	}
	componentDidMount() {
        client.getEntries({
            'content_type': 'blog', 'order': '-sys.createdAt'
        }).then((entries) => {
            this.setState({ blogpage: entries.items.length })
        })
        
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

							{this.state.blogpage.map((item,index) =>{
								return(<div className="col-md-6 blog-content">
								<img src={blog1} alt=""  className="img-blog img-fluid"/>
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
							</div>)
							}

							
						)	}
					
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Blog;
