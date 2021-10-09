import React, { Component } from "react";
import public1 from "../images/public1.jpg";
import public2 from "../images/public2.png";
import public3 from "../images/public3.jpg";
import "./main.css";

class Home extends Component {
	render() {
		return (
			<div>
				<div
					id="carouselExampleControls"
					class="carousel slide"
					data-bs-ride="carousel"
				>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								src={public1}
								height="500px"
								class="d-block w-100"
								alt="..."
							/>
						</div>
						<div class="carousel-item">
							<img
								src={public2}
								height="500px"
								class="d-block w-100"
								alt="..."
							/>
						</div>
						<div class="carousel-item">
							<img
								src={public3}
								height="500px"
								class="d-block w-100"
								alt="..."
							/>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<section id="feature">
					<div className="container  text-center pt-4">
						<h2>Features</h2>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sequi ullam aspernatur provident consequuntur ea, soluta exercitationem praesentium deleniti quae voluptatem consectetur commodi iste culpa, rerum et cupiditate maxime dignissimos? 
						</p>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-laptop"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
              <div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-mobile"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
              <div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-download"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
              <div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-sms"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
              <div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-wifi"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
              <div className="col-md-4">
								<div className="feature-wrap">
									<i className="fa fa-power-off"> </i>
									<h2>Service 1</h2>
									<h3> Service provider management</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="portfolio">
<div className="container">

	
</div>
				</section>
			</div>
		);
	}
}

export default Home;
