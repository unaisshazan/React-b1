import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class Navbar extends Component{

render(){
  return(<div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container">
    <Link className="navbar-brand" to="#">Top navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Blog">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  </div>);
}



}


export default Navbar;