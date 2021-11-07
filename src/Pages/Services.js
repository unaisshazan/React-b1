import React, { Component } from "react";
import "./main.css";
import Service1 from "../images/services/services1.png";
import BlackLoader from '../images/loader.gif'
import client from './Client'


class Services extends Component {

	constructor (){
	super()	
	this.state = {
		servicepage:[]
	}
	}
	componentDidMount() {
        client.getEntries({
            'content_type' : 'services'
          }).then( (entries) => {
			this.setState({servicepage: entries.items}) 
          })
    }


	render() {
		return (
			<div>
				<section id="services" className="p-4">
					<div className="container">
						<div className="text-center">
							<h2>Our Sevices</h2>
							<p className="lead">
								We are giving following
							</p>
						</div>
						{this.state.servicepage.length === 0 ?
					<div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>
					:
					<div className="row">
						{this.state.servicepage.map((item) => {
								
								return(
									<div className="col-md-4">
									<div className="media service-wrap">
										<div>
											<img className="pr-3" src={item.fields.serviceIcon.fields.file.url} alt="" />
										</div>
										<div className="media-body">
											<h3 className="media-heading">{item.fields.serviceTitle}</h3>
											<p>
												{item.fields.serviceDescription}
											</p>
										</div>
									</div>
								</div>
								)
							}
			
						
                           
						   )	}
                          
                

						</div>
					}
						
					</div>
				</section>
			</div>
		);
	}
}

export default Services;
