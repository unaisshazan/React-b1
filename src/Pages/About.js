import React, { Component } from "react";
import client from "./Client";
class About extends Component {
	constructor() {
		super();
		this.state = { aboutpage: [] };
	}
	componentDidMount() {
		client.getEntries({
				'content_type' : 'about'
			})
			.then( (entries) =>{
				this.setState({aboutpage: entries.items[0]}); // 200
			});
	}
	render() {
		return (
			<div>
				<div className="container">
					<h2 className="text-center">About Us</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
						maiores sint expedita, sequi porro quidem. Velit iusto, voluptates
						illo sint sapiente magni vel beatae. Distinctio expedita dolor sit
						consequuntur ea.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
