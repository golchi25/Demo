import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {

    return (
        <>
        {/* <div className="container-fluid">
        <div className="row">
        <div className="col">
        <nav >
        <NavLink class="navbar-brand" to="/"> 
        Golchi
        </NavLink>
        <div type="button" className="main_nav">
        <ul class="navbar-nav">
        <li class="nav-item">
         <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
         <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
        </li>
        <li class="nav-item">
         <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
         <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
        </li>
        </ul>  
        </div>
        </nav>
        </div>
        </div>
        
        </div> */}

<nav className="navbar navbar-expand-sm">
  <NavLink className="navbar-brand" to="#">
    GOLCHI
  </NavLink>
  
  <div className="option">
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink activeClassName="active_class" exact className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active_class" exact className="nav-link" to="/service">Service</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active_class" exact className="nav-link" to="/about">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active_class" exact className="nav-link" to="/contact">Contact</NavLink>
    </li>
  </ul>
  </div>
</nav>
        </>
    );
}

export default Menu;