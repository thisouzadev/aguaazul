/* eslint-disable require-jsdoc */
import React from "react";
import "./menu.scss";
import PropTypes from "prop-types";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#information">Sobre nos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Serviços</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
