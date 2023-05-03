/* eslint-disable require-jsdoc */
import React from "react";
import "./topbar.scss";
import PropTypes from "prop-types";

import * as BSIcons from "react-icons/bs";
import * as MDIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as FAIcons from "react-icons/fa";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Água Azul.
          </a>
          <div className="itemContainer">
            <BSIcons.BsPersonFill className="icon" />
            <span>+55 21964792972</span>
          </div>
          <div className="itemContainer">
            <MDIcons.MdEmail className="icon" />
            <span>xxxxxx@gmail.com</span>
          </div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="itemContainer">
              <BSIcons.BsFacebook className="icon" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="itemContainer">
              <BSIcons.BsInstagram className="icon" />
            </div>
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=964792972"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="itemContainer">
              <BSIcons.BsWhatsapp className="icon" />
            </div>
          </a>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

Topbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Topbar;
