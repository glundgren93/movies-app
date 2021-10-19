import "./Navbar.css";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  let { path, url } = useRouteMatch();
  console.log(url);

  return (
    <>
      <nav className="navbar">
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/favorites">
          Favorites
        </NavLink>
        <NavLink activeClassName="active" to="/watchLater">
          Watch later
        </NavLink>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
