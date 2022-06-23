import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user" className="nav-link">
            ADD PRODUCT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" className="nav-link">
            EDIT PRODUCT 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/futures" className="nav-link">
              EXTRA
            </NavLink>
          </li>
         
        </ul>
      </header>
    </>
  );
};

export default Navbar;
