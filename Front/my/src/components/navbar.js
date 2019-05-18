import React from 'react';
import {Link} from 'react-router-dom';
import  './components_css/navbar.css'


export const Navbar = () =>{
    return(

<ul className="topnav">
  <li><Link to="/register">Home</Link></li>
  <li><Link to="/register">Your subscription</Link></li>
  <li className="right"><button className="button">Logout</button></li>
  <li className="right"><Link to="/register">messages</Link></li>
  <li className="right"><Link to="/register">Parameters</Link></li>
  <li className="right"><Link to="/register">search</Link></li>
</ul> 
)
};

export default Navbar;
