import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class Navbar extends Component{

render(){
  return(<div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container">
    <Link class="navbar-brand" to="#">Top navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ms-auto mb-2 mb-md-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Blog">Blogs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  </div>);
}



}


export default Navbar;