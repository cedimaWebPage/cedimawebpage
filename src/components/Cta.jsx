import React from "react";
import "./Cta.css";

export default function CTA() {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__blob cta__blob--1" />
          <div className="cta__blob cta__blob--2" />
          <div className="cta__content">
            <h2 className="cta__title">¿Quiénes Somos?</h2>
            <p className="cta__sub">
              Desde 1994, en Cedima IPS creemos que el acceso a una salud de
              calidad no debería depender de cuánto puedas pagar. Por más de
              tres décadas hemos acompañado a familias que no han podido acceder
              a la medicina prepagada tradicional.
            </p>
            <p className="cta__sub">
              Hoy seguimos con la misma convicción del primer día: cuidar la
              salud de quienes más quieres nunca debería ser un privilegio. En
              Cedima IPS, más que una IPS, somos una familia cuidando familias.
            </p>
          </div>
          <img
            src="/images/cedimaFoto.jpg"
            alt="Equipo médico Cedima IPS"
            className="cta__image"
          />
        </div>
      </div>
    </section>
  );
}
