import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🩺', bg: '#dbeafe', title: 'Endoscopia', desc: 'Estudio especializado para evaluar molestias digestivas, gastritis, reflujo y otros síntomas del sistema gastrointestinal.' },
  { icon: '🔎', bg: '#d0f4ea', title: 'Colonoscopia', desc: 'Procedimiento diagnóstico para revisar el colon y apoyar la detección o seguimiento de condiciones digestivas.' },
  { icon: '🫀', bg: '#fef9c3', title: 'Ecocardiograma y electrocardiograma', desc: 'Estudios para evaluar la salud del corazón y apoyar diagnósticos cardiovasculares de forma oportuna.' },
  { icon: '📈', bg: '#fde8ee', title: 'Holter de presión y ritmo', desc: 'Monitoreo ambulatorio para revisar el comportamiento de la presión arterial o el ritmo cardíaco durante el día.' },
  { icon: '🌸', bg: '#d4f0df', title: 'Colposcopia, citología y DIU', desc: 'Procedimientos ginecológicos para prevención, control y cuidado de la salud femenina.' },
  { icon: '💧', bg: '#ede9fe', title: 'Uroflujometría y cistoscopia', desc: 'Estudios urológicos para evaluar síntomas urinarios y orientar un diagnóstico adecuado.' },
]

const SERVICES = [
  { servicio: 'Endoscopia', tiempo: '20–30 min', descuento: 'Hasta 35%' },
  { servicio: 'Colonoscopia', tiempo: '30–45 min', descuento: 'Hasta 35%' },
  { servicio: 'Ecocardiograma y electrocardiograma', tiempo: '20–40 min', descuento: 'Hasta 40%' },
  { servicio: 'Holter de presión y ritmo', tiempo: '15–20 min instalación / 24 h monitoreo', descuento: 'Hasta 40%' },
  { servicio: 'Colposcopia, citología y DIU', tiempo: '20–30 min', descuento: 'Hasta 45%' },
  { servicio: 'Uroflujometría y cistoscopia', tiempo: '30–45 min', descuento: 'Hasta 35%' },
  { servicio: 'Nasofibrolaringoscopía', tiempo: '15–20 min', descuento: 'Hasta 40%' },
  { servicio: 'Electromiografía', tiempo: '45–60 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Necesito una orden médica para realizarme un procedimiento?', a: 'No necesariamente. En Cedima IPS muchos procedimientos pueden realizarse bajo solicitud del paciente, sin necesidad de orden médica previa. Sin embargo, en algunos casos nuestros profesionales pueden orientarte para definir el procedimiento más adecuado según tus síntomas.' },
  { q: '¿Cuánto tiempo debo esperar para agendar un procedimiento?', a: 'En Cedima IPS no tienes que esperar meses para acceder a un procedimiento médico. Generalmente, las citas se programan dentro de la misma semana, según disponibilidad.' },
  { q: '¿Puedo realizarme procedimientos de forma particular??', a: 'Sí. Puedes acceder a nuestros procedimientos médicos de forma particular y sin trámites complicados. Además, con el Plan Cedima puedes obtener descuentos exclusivos en todos nuestros servicios.' },
  { q: '¿El Plan Cedima incluye descuentos en procedimientos médicos?', a: 'Sí. Los miembros de los planes Cedima pueden acceder a descuentos de hasta el 50% en procedimientos, consultas y servicios médicos seleccionados.' },
  { q: '¿Debo tener alguna preparación antes del procedimiento?', a: 'Algunos procedimientos pueden requerir preparación previa, como ayuno o recomendaciones específicas. Nuestro equipo te indicará todo lo necesario antes de tu cita.' },
]

export default function Optometria() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #faf8f3 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#93c5fd' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#a8e0bf' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver al inicio
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#dbeafe' }}>👁️</div>
                <span className="tag" style={{ background: '#dbeafe', color: '#1e40af' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Procedimientos</em> Médicos
              </h1>
              <p className="pkg-hero__desc">
                Accede a procedimientos médicos de forma ágil, segura y confiable, con atención profesional y sin largas esperas.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar ahora</a>
                <a href="#servicios" className="btn btn-outline">Ver procedimientos</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#93c5fd' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag" style={{ background: '#dbeafe', color: '#1e40af' }}>Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem', color: '#1e40af' }}>Hasta 50%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Examen visual completo', 'Fondo de ojo y topografía corneal', 'Adaptación de lentes de contacto', 'Evaluación de glaucoma', 'Optometría pediátrica especializada'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#dbeafe' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#1e40af" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>Agendar ahora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Nuestros servicios</p>
          <h2 className="pkg-section__title">Cuidado visual para toda la familia</h2>
          <p className="pkg-section__sub">Evaluaciones visuales completas y tratamientos especializados para niños, adultos y adultos mayores con la tecnología más avanzada.</p>
          <div className="pkg-benefits">
            {BENEFITS.map(b => (
              <div key={b.title} className="pkg-benefit-card">
                <div className="pkg-benefit-card__icon" style={{ background: b.bg }}>{b.icon}</div>
                <p className="pkg-benefit-card__title">{b.title}</p>
                <p className="pkg-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pkg-section pkg-section--alt" id="servicios">
        <div className="container">
          <p className="pkg-section__label">Procedimientos y beneficios</p>
          <h2 className="pkg-section__title">Procedimientos médicos con atención oportuna</h2>
          <p className="pkg-section__sub">Todos los procedimientos con descuentos exclusivos para miembros de los planes Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Servicio</th><th>Duración aprox.</th><th>Descuento miembros</th></tr>
              </thead>
              <tbody>
                {SERVICES.map(s => (
                  <tr key={s.servicio}>
                    <td>{s.servicio}</td>
                    <td>{s.tiempo}</td>
                    <td><span className="pkg-table__yes">{s.descuento}</span></td>
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
          <p className="pkg-section__sub"> Todo lo que necesitas saber antes de realizarte un procedimiento médico en Cedima IPS.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">¿Cuándo fue tu último examen visual?</h3>
            <p className="pkg-cta__sub">Agenda hoy y cuida la salud de tus ojos con nuestros especialistas.</p>
          </div>
          <div className="pkg-cta__actions">
            <a href="tel:+57000000000" className="btn btn-white">Llamar ahora</a>
            <a href="https://wa.me/57000000000" className="btn btn-ghost">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  )
}
