import React from "react";
import { Link } from "react-router-dom";
import "./Procedimientos.css";

const BENEFITS = [
  {
    icon: "🩹",
    bg: "#d0f4ea",
    title: "Curaciones y suturas",
    desc: "Atención de heridas, laceraciones y quemaduras menores con técnicas de asepsia estricta y materiales de primera calidad.",
  },
  {
    icon: "💉",
    bg: "#d4f0df",
    title: "Infiltraciones y aplicaciones",
    desc: "Infiltraciones de corticoides, ácido hialurónico y aplicación de medicamentos inyectables de forma segura y controlada.",
  },
  {
    icon: "🔪",
    bg: "#fde8ee",
    title: "Procedimientos menores en piel",
    desc: "Extracción de quistes sebáceos, lipomas, verrugas, lunares benignos y cuerpos extraños superficiales bajo anestesia local.",
  },
  {
    icon: "🩺",
    bg: "#ede9fe",
    title: "Drenaje de abscesos",
    desc: "Drenaje y manejo de abscesos cutáneos y subcutáneos con seguimiento posterior hasta la resolución completa.",
  },
  {
    icon: "🧪",
    bg: "#fef9c3",
    title: "Toma de muestras",
    desc: "Toma de biopsias de piel, frotis, cultivos y otras muestras para análisis de laboratorio con resultados oportunos.",
  },
  {
    icon: "🫀",
    bg: "#dbeafe",
    title: "Electrocardiograma",
    desc: "Registro de la actividad eléctrica del corazón para diagnóstico de arritmias, infartos y otras afecciones cardíacas.",
  },
  {
    icon: "🩻",
    bg: "#e0f7ef",
    title: "Retiro de puntos y férulas",
    desc: "Retiro de suturas, puntos, vendajes especiales y férulas con revisión del proceso de cicatrización.",
  },
  {
    icon: "💊",
    bg: "#fef3c7",
    title: "Nebulizaciones",
    desc: "Tratamiento de afecciones respiratorias mediante nebulización con broncodilatadores y solución salina bajo supervisión médica.",
  },
  {
    icon: "🔬",
    bg: "#fde8ee",
    title: "Cauterización de lesiones",
    desc: "Eliminación de verrugas, pólipos y otras lesiones benignas mediante cauterización química o eléctrica.",
  },
];

const SERVICES = [
  {
    servicio: "Curación simple de heridas",
    tiempo: "20 min",
    descuento: "Hasta 50%",
  },
  {
    servicio: "Sutura de laceraciones",
    tiempo: "30 min",
    descuento: "Hasta 45%",
  },
  { servicio: "Retiro de puntos", tiempo: "15 min", descuento: "Hasta 50%" },
  { servicio: "Drenaje de absceso", tiempo: "30 min", descuento: "Hasta 45%" },
  {
    servicio: "Extracción de quiste sebáceo",
    tiempo: "45 min",
    descuento: "Hasta 40%",
  },
  {
    servicio: "Extracción de cuerpo extraño",
    tiempo: "30 min",
    descuento: "Hasta 45%",
  },
  {
    servicio: "Infiltración de corticoides",
    tiempo: "20 min",
    descuento: "Hasta 40%",
  },
  {
    servicio: "Cauterización de lesiones",
    tiempo: "30 min",
    descuento: "Hasta 40%",
  },
  { servicio: "Electrocardiograma", tiempo: "20 min", descuento: "Hasta 50%" },
  { servicio: "Nebulización", tiempo: "20 min", descuento: "Hasta 45%" },
  {
    servicio: "Toma de biopsia de piel",
    tiempo: "30 min",
    descuento: "Hasta 40%",
  },
  {
    servicio: "Aplicación de inyectables",
    tiempo: "15 min",
    descuento: "Hasta 50%",
  },
];

export default function Procedimientos() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="pkg-hero section--cream">
        <div className="pkg-hero__bg">
          <div
            className="pkg-hero__blob pkg-hero__blob--1"
            style={{ background: "#a8e0bf" }}
          />
          <div
            className="pkg-hero__blob pkg-hero__blob--2"
            style={{ background: "#d4f0df" }}
          />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver al inicio
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div
                  className="pkg-hero__icon"
                  style={{ background: "#d0f4ea" }}
                >
                  🩹
                </div>
                <span className="tag">Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Procedimientos</em> Médicos Menores
              </h1>
              <p className="pkg-hero__desc">
                Atención oportuna para procedimientos ambulatorios de baja
                complejidad. Contamos con el personal y los equipos necesarios
                para realizar curaciones, suturas, infiltraciones, drenajes y
                más, con la seguridad y calidad que mereces.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">
                  Agendar cita
                </a>
                <a href="#servicios" className="btn btn-outline">
                  Ver procedimientos
                </a>
              </div>
            </div>
            <div className="pkg-price-card">
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">
                  Descuento con plan Cedima
                </span>
                <span className="pkg-price-card__badge tag">Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span
                  className="pkg-price-card__number"
                  style={{ fontSize: "2.5rem" }}
                >
                  Hasta 50%
                </span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {[
                "Curaciones y suturas",
                "Drenaje de abscesos",
                "Procedimientos menores en piel",
                "Electrocardiograma",
                "Nebulizaciones y aplicación de inyectables",
                "Toma de biopsias",
              ].map((f) => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5 3.5-4"
                        stroke="var(--green-600)"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {f}
                </div>
              ))}
              <a
                href="#contacto"
                className="btn btn-primary"
                style={{ justifyContent: "center", marginTop: "1rem" }}
              >
                Agendar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Nuestros procedimientos</p>
          <h2 className="pkg-section__title">
            Atención ambulatoria rápida y segura
          </h2>
          <p className="pkg-section__sub">
            Realizamos procedimientos menores con altos estándares de asepsia,
            personal capacitado y seguimiento post-procedimiento para garantizar
            tu recuperación.
          </p>
          <div className="pkg-benefits">
            {BENEFITS.map((b) => (
              <div key={b.title} className="pkg-benefit-card">
                <div
                  className="pkg-benefit-card__icon"
                  style={{ background: b.bg }}
                >
                  {b.icon}
                </div>
                <p className="pkg-benefit-card__title">{b.title}</p>
                <p className="pkg-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pkg-section pkg-section--alt" id="servicios">
        <div className="container">
          <p className="pkg-section__label">Tarifas</p>
          <h2 className="pkg-section__title">Procedimientos disponibles</h2>
          <p className="pkg-section__sub">
            Todos los procedimientos con descuentos exclusivos para miembros de
            los planes Cedima.
          </p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr>
                  <th>Procedimiento</th>
                  <th>Duración aprox.</th>
                  <th>Descuento miembros</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.servicio}>
                    <td>{s.servicio}</td>
                    <td>{s.tiempo}</td>
                    <td>
                      <span className="pkg-table__yes">{s.descuento}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Preguntas frecuentes</p>
          <h2 className="pkg-section__title">Resolvemos tus dudas</h2>
          <p className="pkg-section__sub">
            Todo lo que necesitas saber antes de tu procedimiento en Cedima.
          </p>
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">
              ¿Necesitas un procedimiento menor?
            </h3>
            <p className="pkg-cta__sub">
              Agenda tu cita hoy y recibe atención oportuna con descuentos
              exclusivos para miembros Cedima.
            </p>
          </div>
          <div className="pkg-cta__actions">
            <a href="tel:+573330333000" className="btn btn-white">
              Llamar ahora al (333)-033-3000
            </a>
            <a
              href="https://web.whatsapp.com/send/?phone=573152591449&text&type=phone_number&app_absent=0"
              className="btn btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
