/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { frontPortfolio, backPortfolio, pythonPortfolio } from "../../data";
function Portfolio() {
  const [selected, setSelected] = useState("Manutenção de Piscinas");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Manutenção de Piscinas",
      title: "Manutenção de Piscinas",
    },
    {
      id: "Tratamento de Água",
      title: "Tratamento de Água",
    },
    {
      id: "Guardião de Piscinas",
      title: "Guardião de Piscinas",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Manutenção de Piscinas":
        setData(frontPortfolio);
        break;
      case "Tratamento de Água":
        setData(backPortfolio);
        break;
      case "Guardião de Piscinas":
        setData(pythonPortfolio);
        break;
      default:
        setData(frontPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Serviços</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      {/* <div className="container">
        {data.map((data) => (
          <section key={data.id}>
            <div className="item">
              <img src={data.img} alt="" />
              <h3>{data.title}</h3>
            </div>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              repositório
            </a>
          </section>
        ))}
      </div> */}
    </div>
  );
}

export default Portfolio;
