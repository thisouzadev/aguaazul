/* eslint-disable require-jsdoc */
import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Manutenção de Piscinas",
        "Tratamento de Água",
        "Segurança com Guardião de Piscinas",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, Somos</h2>
          <h1>Água azul</h1>
          <h3>
            Realizamos <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#information">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
