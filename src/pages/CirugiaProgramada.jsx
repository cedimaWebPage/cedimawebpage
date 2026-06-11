import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '👁️', bg: '#eae8fd', title: 'Cirugías oftalmológicas', desc: 'Procedimientos oculares con tecnología láser y atención especializada para el cuidado de tu visión.' },
  { icon: '🌸', bg: '#d2d0f4', title: 'Cirugías ginecológicas', desc: 'Procedimientos programados para diagnóstico, tratamiento y bienestar de la salud femenina.' },
  { icon: '🩺', bg: '#d4f0df', title: 'Cirugías laparoscópicas', desc: 'Procedimientos realizados con técnicas especializadas que favorecen una recuperación más cómoda y un proceso quirúrgico seguro.' },
  { icon: '💧', bg: '#ede9fe', title: 'Procedimientos urológicos', desc: 'Atención quirúrgica y diagnóstica para el manejo de condiciones urinarias y masculinas.' },
  { icon: '🔬', bg: '#fef9c3', title: 'Resección de lesiones y biopsias', desc: 'Procedimientos para evaluación y manejo de lesiones cutáneas y tejidos blandos.' },
  { icon: '🏥', bg: '#e0e0f7', title: 'Procedimientos ambulatorios', desc: 'Cirugías y procedimientos programados con procesos ágiles y acompañamiento profesional.' },
]

const SERVICES = [
  { servicio: 'Iridotomía con láser bilateral', tiempo: '30 min', descuento: 'Hasta 20%' },
  { servicio: 'Extracción de cristalino por facoemulsificación', tiempo: '45 min', descuento: 'Hasta 30%' },
  { servicio: 'Resección de pterigión con injerto', tiempo: '45 min', descuento: 'Hasta 35%' },
  { servicio: 'Circuncisión', tiempo: '45 min', descuento: 'Hasta 45%' },
  { servicio: 'Biopsia de próstata con sedación', tiempo: '45 min', descuento: 'Hasta 30%' },
  { servicio: 'Conización', tiempo: '30 min', descuento: 'Hasta 30%' },
  { servicio: 'Resección de tumor', tiempo: '45 min', descuento: 'Hasta 25%' },
  { servicio: 'Legrado ginecológico', tiempo: '30 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Necesito orden médica para programar una cirugía o procedimiento?', a: 'Sí. En el caso de cirugías programadas, primero debes pasar por una valoración con el especialista. Él revisará tu caso, resolverá tus dudas y determinará si el procedimiento es indicado para ti.' },
  { q: '¿Las cirugías son realizadas por especialistas?', a: 'Sí. Contamos con médicos especialistas y personal capacitado que te acompañará antes, durante y después del procedimiento.' },
  { q: '¿Los planes Cedima ofrecen descuentos en cirugías y procedimientos?', a: 'Sí. Los miembros de los planes Cedima pueden acceder a descuentos exclusivos en procedimientos, consultas y cirugías programadas seleccionadas.' },
  { q: '¿Debo tener alguna preparación antes de la cirugía?', a: 'Sí. Algunos procedimientos pueden requerir ayuno, exámenes previos o recomendaciones específicas. Nuestro equipo te indicará todo antes de tu cita.' },
  { q: '¿Puedo financiar una cirugía o procedimiento?', a: 'Sí. Algunos procedimientos pueden acceder a opciones de financiación según el método de pago disponible y valoración administrativa.' },
]

export default function Ginecologia() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #f1f1ff 0%, #faf8f3 60%, #f0faf4 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#a4b4fd' }} />
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
                <div className="pkg-hero__icon" style={{ background: '#e8eefd' }}>🏥</div>
                <span className="tag" style={{ background: '#e8ebfd', color: '#122c9f' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Cirugías</em> Programadas
              </h1>
              <p className="pkg-hero__desc">
                En Cedima IPS realizamos cirugías programadas con atención segura, acompañamiento profesional y procesos ágiles, para que puedas acceder al procedimiento que necesitas con confianza y sin largas esperas.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar Valoración</a>
                <a href="#servicios" className="btn btn-outline">Ver Procedimientos</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#a4a5fd' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Descuento con plan Cedima</span>
                <span className="pkg-price-card__badge tag" style={{ background: '#e8edfd', color: '#121b9f' }}>Miembros</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__number" style={{ fontSize: '2.5rem', color: 'rgb(39, 18, 159)' }}>Hasta 45%</span>
              </div>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Destacados</p>
              {['Cirugías oftalmológicas con láser', 'Histerectomía y procedimientos ginecológicos', 'Colecistectomía laparoscópica', 'Circuncisión y procedimientos urológicos', 'Resección de lesiones y tumores de piel'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#e8eefd' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#12279f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>Agendar Cita</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Nuestras Cirugías Programadas</p>
          <h2 className="pkg-section__title">Atención quirúrgica profesional</h2>
          <p className="pkg-section__sub">Accede a cirugías programadas con especialistas capacitados, equipos de alta calidad y acompañamiento profesional en cada etapa del proceso.</p>
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
          <p className="pkg-section__label">PROCEDIMIENTOS DISPONIBLES</p>
          <h2 className="pkg-section__title">Servicios Quirúrgicos Programados</h2>
          <p className="pkg-section__sub">Accede a cirugías y procedimientos programados con especialistas capacitados, acompañamiento profesional y beneficios para miembros del Plan Cedima.</p>
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
          <p className="pkg-section__sub">Información importante antes de tu cirugía o procedimiento programado en Cedima IPS.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Tus cirugías en manos expertas 🩺</h3>
            <p className="pkg-cta__sub">Agenda tu valoración para cirugías programadas con especialistas certificados y acompañamiento profesional en cada etapa del proceso.</p>
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
