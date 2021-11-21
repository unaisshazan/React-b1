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
        const slug = this.props.match.params.slug
       
    if (slug){
        client
        .getEntries({
            content_type: "blog" ,"fields.slug":slug
        })
        .then((entries) => {
            this.setState({article:entries.items[0] });
        });
}

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
