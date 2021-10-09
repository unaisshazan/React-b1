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
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
							sequi ullam aspernatur provident consequuntur ea, soluta
							exercitationem praesentium deleniti quae voluptatem consectetur
							commodi iste culpa, rerum et cupiditate maxime dignissimos?
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
					<div className="container  text-center pt-4">
						<h2>Portfolio</h2>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
							sequi ullam aspernatur provident consequuntur ea, soluta
							exercitationem praesentium deleniti quae voluptatem consectetur
							commodi iste culpa, rerum et cupiditate maxime dignissimos?
						</p>
					</div>
					<div className="container">
						<input type="checkbox" id="pic-1" />
						<label for="pic-1" class="lightbox">
							<img src="http://unsplash.it/800/600?image=1" />
						</label>
						<input type="checkbox" id="pic-2" />
						<label for="pic-2" class="lightbox">
							<img src="http://unsplash.it/800/600?image=20" />
						</label>
						<input type="checkbox" id="pic-3" />
						<label for="pic-3" class="lightbox">
							<img src="http://unsplash.it/800/600?image=21" />
						</label>
						<input type="checkbox" id="pic-4" />
						<label for="pic-4" class="lightbox">
							<img src="http://unsplash.it/800/600?image=42" />
						</label>
						<input type="checkbox" id="pic-5" />
						<label for="pic-5" class="lightbox">
							<img src="http://unsplash.it/800/600?image=48" />
						</label>
						<input type="checkbox" id="pic-6" />
						<label for="pic-6" class="lightbox">
							<img src="http://unsplash.it/800/600?image=60" />
						</label>
						<input type="checkbox" id="pic-7" />
						<label for="pic-7" class="lightbox">
							<img src="http://unsplash.it/800/600?image=201" />
						</label>
						<input type="checkbox" id="pic-8" />
						<label for="pic-8" class="lightbox">
							<img src="http://unsplash.it/800/600?image=7" />
						</label>
						<input type="checkbox" id="pic-9" />
						<label for="pic-9" class="lightbox">
							<img src="http://unsplash.it/800/600?image=119" />
						</label>
						<input type="checkbox" id="pic-10" />
						<label for="pic-10" class="lightbox">
							<img src="http://unsplash.it/800/600?image=180" />
						</label>
						<input type="checkbox" id="pic-11" />
						<label for="pic-11" class="lightbox">
							<img src="http://unsplash.it/800/600?image=96" />
						</label>
						<input type="checkbox" id="pic-12" />
						<label for="pic-12" class="lightbox">
							<img src="http://unsplash.it/800/600?image=24" />
						</label>
						<div class="grid">
							<label for="pic-1" class="grid-item">
								<img src="http://unsplash.it/400/300?image=1" />
							</label>
							<label for="pic-2" class="grid-item">
								<img src="http://unsplash.it/400/300?image=20" />
							</label>
							<label for="pic-3" class="grid-item">
								<img src="http://unsplash.it/400/300?image=21" />
							</label>
							<label for="pic-4" class="grid-item">
								<img src="http://unsplash.it/400/300?image=42" />
							</label>
							<label for="pic-5" class="grid-item">
								<img src="http://unsplash.it/400/300?image=48" />
							</label>
							<label for="pic-6" class="grid-item">
								<img src="http://unsplash.it/400/300?image=60" />
							</label>
							<label for="pic-7" class="grid-item">
								<img src="http://unsplash.it/400/300?image=201" />
							</label>
							<label for="pic-8" class="grid-item">
								<img src="http://unsplash.it/400/300?image=7" />
							</label>
							<label for="pic-9" class="grid-item">
								<img src="http://unsplash.it/400/300?image=119" />
							</label>
							<label for="pic-10" class="grid-item">
								<img src="http://unsplash.it/400/300?image=180" />
							</label>
							<label for="pic-11" class="grid-item">
								<img src="http://unsplash.it/400/300?image=96" />
							</label>
							<label for="pic-12" class="grid-item">
								<img src="http://unsplash.it/400/300?image=24" />
							</label>
						</div>
					</div>
				</section>
				<section id="faqs">
				<div className="container  text-center pt-4">
						<h2>Faq's</h2>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
							sequi ullam aspernatur provident consequuntur ea, soluta
							exercitationem praesentium deleniti quae voluptatem consectetur
							commodi iste culpa, rerum et cupiditate maxime dignissimos?
						</p>
					</div>
				
					<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
				</section>
				<div className="spacer"></div>
			</div>
		);
	}
}

export default Home;
