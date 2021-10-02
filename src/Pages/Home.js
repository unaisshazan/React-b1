import React, { Component } from 'react';
import public1 from "../images/public1.jpg"
import public2 from "../images/public2.png"
import public3 from "../images/public3.jpg"


class Home extends Component{
    render(){
        return(<div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={public1}  height="500px" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={public2}  height="500px" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={public3} height="500px" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






        </div>)
    }


}

export default Home;