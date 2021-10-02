import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Component } from 'react';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';


class App extends Component{

render(){
  return(<Router><div>
    <Navbar/>
    
   <Route exact path="/" component={Home}/>
   <Route exact path="/About" component={About}/>
   <Route exact path="/Services" component={Services}/>
   <Route exact path="/Blog" component={Blog}/>
   <Route exact path="/Contact" component={Contact}/>

    <Footer/>
    </div></Router>);
}



}

export default App;