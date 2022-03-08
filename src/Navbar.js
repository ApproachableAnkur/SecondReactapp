import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a class="navbar-brand" href="#">ReactAnkur</a>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <NavLink className="nav-link" to="/">Home </NavLink>
        <NavLink className="nav-link" to="/about"> About </NavLink>
        <NavLink className="nav-link" to="/contact"> Contact </NavLink>
       
      </ul>
    </div>

  </div>
</nav>
<Outlet />
    </>
  )
}

export default Navbar