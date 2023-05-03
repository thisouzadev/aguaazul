/* eslint-disable require-jsdoc */
import React from "react";
import "./information.scss";

function Information() {
  const information = [
    {
      information: "Email",
      answeredInformation: "xxxxxxxxx@gmail.com",
    },
    {
      information: "Celular/WhatsApp",
      answeredInformation: "+55(21)xxxx-xxxx",
    },
    {
      information: "Cidade",
      answeredInformation: "Rio de janeiro, RJ",
    },
    {
      information: "instagram",
      answeredInformation: "https://www.instagram.com/",
    },
    {
      information: "facebook",
      answeredInformation: "https://www.facebook.com/",
    },
    {
      information: "Seg à Sex",
      answeredInformation: "09h às 18h",
    },
  ];

  return (
    <div className="information" id="information">
      <div className="section-title mt-5">
        <h1>Água azul</h1>
        <h2>Prezado(a) visitante do nosso site,</h2>
      </div>
      <p className="description">
        É com grande satisfação que apresentamos nossa empresa de guardião de
        piscinas e nossos valores fundamentais.
      </p>
      <p className="description">
        Nossa missão é fornecer serviços de alta qualidade para garantir que
        todos possam desfrutar de uma piscina segura e limpa. Estamos
        comprometidos em fornecer serviços confiáveis ​​e eficientes para nossos
        clientes, oferecendo-lhes a tranquilidade de saber que suas piscinas
        estão em boas mãos.
      </p>
      <p className="description">
        Nossa visão é ser líder no mercado de serviços de piscinas, fornecendo
        soluções personalizadas para atender às necessidades individuais de
        nossos clientes. Nosso objetivo é criar relacionamentos duradouros com
        nossos clientes, tornando-se uma parte importante de suas vidas e
        oferecendo-lhes a paz de espírito de que suas piscinas são bem cuidadas.
      </p>
      <p className="description">
        Nossos valores são baseados na integridade, confiança e
        responsabilidade. Nós nos esforçamos para ser transparentes em tudo o
        que fazemos e para manter a confiança de nossos clientes. Somos
        responsáveis ​​por nossas ações e nos dedicamos a fornecer serviços
        excepcionais para cada um de nossos clientes.
      </p>
      <p className="description"></p>
      {/* <p className="description">
        Obrigado por visitar nosso site e por considerar nossa empresa como sua
        escolha de serviço de piscinas. Estamos ansiosos para trabalhar com você
        e garantir que sua piscina seja um local seguro e agradável para você e
        sua família desfrutarem.
      </p> */}
      <br />
      <h1 className="signature">Água azul LL Piscinas</h1>
      {information.map((item, index) => {
        return (
          <section key={index} className="container">
            <p className="about-info">{item.information + ": "}</p>
            <span>{item.answeredInformation}</span>
          </section>
        );
      })}
    </div>
  );
}

export default Information;
