import React from 'react';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <NavLink className="navbar-item" to="/">
    </NavLink>

    <NavLink role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" to="/team">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </NavLink>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item front-nav" to="/">
        Home
      </NavLink>

      <NavLink className="navbar-item inner-nav" to="/team">
        Team
      </NavLink>

        <NavLink className="navbar-item inner-nav" to="/team">
          Songs
        </NavLink>
      
        <NavLink className="navbar-item outer-nav" to="/team">
          Data
        </NavLink>
    </div>

    {/* <div className="navbar-end">
    <NavLink className="navbar-item" to="/team">
          Data
        </NavLink>
    </div> */}
  </div>
</nav>
        </div>
    );
};

export default Navbar;