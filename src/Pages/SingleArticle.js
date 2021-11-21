import React, { Component } from "react";
import { Link } from "react-router-dom";
import client from "./Client";
import marked from "marked";
import BlackLoader from "../images/black-loader.gif";
import { render } from "react-dom";

class SingleArticle extends Component {
	constructor() {
		super();
		this.state = { article: [] };
	}
	componentDidMount() {
		client
			.getEntries({
				content_type: "services",
			})
			.then((entries) => {
				this.setState({ servicepage: entries.items });
			});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>This is blog Title</h2>
						<p>This is blog desc</p>
						<p> Back</p>
					</div>
				</div>
			</div>
		);
	}
}
