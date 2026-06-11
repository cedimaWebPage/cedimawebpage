import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🔍', bg: '#fde8ee', title: 'Medicina Interna', desc: 'Valoración médica especializada para adultos, ideal para el control de enfermedades crónicas, síntomas persistentes y chequeos generales.' },
  { icon: '✨', bg: '#fef9c3', title: 'Dermatología', desc: 'Diagnóstico y manejo de enfermedades de la piel, acné, manchas, alergias, lunares y otros cambios de la piel.' },
  { icon: '👶', bg: '#d0f4ea', title: 'Pediatría', desc: 'Cuidado médico para bebés, niños y adolescentes, con atención cercana para controles, síntomas y seguimiento del crecimiento.' },
  { icon: '🙋‍♀️', bg: '#fef3c7', title: 'Ginecología', desc: 'Atención integral para la salud femenina, controles preventivos, orientación médica y seguimiento en cada etapa de la vida.' },
  { icon: '🙋‍♂️', bg: '#ede9fe', title: 'Urología', desc: 'Atención especializada para la salud urinaria y masculina, con orientación clara para diagnóstico, prevención y tratamiento.' },
  { icon: '💨', bg: '#d4f0df', title: 'Gastroenterología', desc: 'Evaluación de molestias digestivas, dolor abdominal, gastritis, reflujo y otros síntomas relacionados con el sistema digestivo.' },
]

const SERVICES = [
  { servicio: 'Medicina general o integrativa', tiempo: '20 min', descuento: 'Hasta 100%' },
  { servicio: 'Dermatología', tiempo: '20 min', descuento: 'Hasta 50%' },
  { servicio: 'Ginecología', tiempo: '20 min', descuento: 'Hasta 50%' },
  { servicio: 'Medicina interna', tiempo: '30 min', descuento: 'Hasta 50%' },
  { servicio: 'Urología', tiempo: '20 min', descuento: 'Hasta 40%' },
  { servicio: 'Pediatría', tiempo: '20 min', descuento: 'Hasta 40%' },
  { servicio: 'Neurología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Cardiología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Gastroenterología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Cirugía general', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Otorrinolaringología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Oftalmología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Ortopedia o Traumatología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Nutrición', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Fonoaudiología', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Psicología', tiempo: '20 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Qué especialista debo consultar según mis síntomas?', a: 'Si no estás seguro de qué especialidad necesitas, nuestro equipo puede orientarte. Cuando tus síntomas no son puntuales o no sabes por dónde empezar, lo más recomendable es consultar primero con un médico general para recibir una valoración inicial y definir el camino adecuado.' },
  { q: '¿Qué debo llevar el día de mi consulta?', a: 'Te recomendamos llevar documentos de identidad, exámenes anteriores, fórmula médica si tienes, y cualquier información importante sobre tus síntomas o antecedentes.' },
  { q: '¿Cuánto tiempo debo esperar para una consulta?', a: 'En Cedima IPS no tienes que esperar meses para cuidar tu salud. Puedes acceder a medicina general el mismo día y a consultas con especialistas en un plazo máximo de 5 días, según disponibilidad de agenda.' },
  { q: '¿Puedo recibir atención con diferentes especialistas?', a: 'Sí. En Cedima IPS puedes acceder a profesionales en distintas áreas médicas para recibir orientación clara y oportuna.' },
  { q: '¿Puedo agendar una consulta sin tener un plan asistencial de salud de Cedima?', a: 'Sí. Puedes acceder a nuestras consultas de forma particular. Pero recuerda que con el Plan Cedima puedes obtener descuentos de hasta el 50% en todos nuestros servicios y cuidar tu salud pagando menos.' },
]

export default function ConsultaEspecializada() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #faf8f3 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fda4af' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#d4f0df' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver al inicio
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#fde8ee' }}>🔍</div>
                <span className="tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Consulta</em> Especializada
              </h1>
              <p className="pkg-hero__desc">
                Accede a especialistas sin largas esperas.
En Cedima IPS te ofrecemos consultas especializadas con atención ágil, cercana y profesional, para ayudarte a entender tus síntomas y recibir una orientación médica clara.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar cita</a>
                <a href="#servicios" className="btn btn-outline">Ver servicios</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#fda4af' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem', color: '#9f1239' }}>Hasta 50%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Ortopedia', 'Ginecología', 'Medicina Interna', 'Dermatología', 'Urología'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#fde8ee' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#9f1239" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <p className="pkg-section__label">Nuestras Consultas</p>
          <h2 className="pkg-section__title">Especialistas para cuidar tu salud a tiempo</h2>
          <p className="pkg-section__sub">Accede a consultas médicas en diferentes especialidades con atención humana, profesional y sin largas esperas.</p>
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
          <h2 className="pkg-section__title">Consultas disponibles</h2>
          <p className="pkg-section__sub">Descuentos exclusivos en todas las consultas para miembros Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Consultas</th><th>Duración aprox.</th><th>Descuento miembros</th></tr>
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
          <p className="pkg-section__sub">Todo lo que necesitas saber antes de tu consulta.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">No esperes meses para ver a un especialista</h3>
            <p className="pkg-cta__sub">Consulta con especialistas en Cedima IPS y recibe la orientación que necesitas sin largas esperas.</p>
          </div>
          <div className="pkg-cta__actions">
            <a href="tel:+573152591449" className="btn btn-white">Llamar ahora</a>
            <a href="https://wa.me/573152591449" className="btn btn-ghost">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  )
}
