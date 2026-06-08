import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '🌸', bg: '#fde8ee', title: 'Consulta ginecológica', desc: 'Valoración especializada para prevención, diagnóstico y seguimiento de la salud femenina.' },
  { icon: '🤰', bg: '#d0f4ea', title: 'Control prenatal', desc: 'Acompañamiento durante el embarazo con controles, ecografías y seguimiento profesional.' },
  { icon: '🧪', bg: '#d4f0df', title: 'Citología cervicovaginal', desc: 'Examen preventivo para detección temprana y control de la salud cervical.' },
  { icon: '💊', bg: '#ede9fe', title: 'Planificación familiar', desc: 'Asesoría personalizada en métodos anticonceptivos y salud reproductiva.' },
  { icon: '✨', bg: '#fef9c3', title: 'Menopausia y climaterio', desc: 'Manejo y acompañamiento de cambios hormonales y síntomas de menopausia.' },
  { icon: '🔎', bg: '#e0f7ef', title: 'Colposcopía', desc: 'Evaluación especializada del cuello uterino para seguimiento y prevención ginecológica.' },
]

const SERVICES = [
  { servicio: 'Consulta ginecológica general', tiempo: '30 min', descuento: 'Hasta 50%' },
  { servicio: 'Citología cervicovaginal', tiempo: '20 min', descuento: 'Hasta 35%' },
  { servicio: 'Control prenatal', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Ecografía obstétrica', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Colposcopía', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Inserción de DIU', tiempo: '30 min', descuento: 'Hasta 40%' },
  { servicio: 'Consulta de menopausia', tiempo: '40 min', descuento: 'Hasta 35%' },
  { servicio: 'Biopsia endometrial', tiempo: '30 min', descuento: 'Hasta 35%' },
]

const FAQS = [
  { q: '¿Desde qué edad debo visitar al ginecólogo?', a: 'La primera consulta ginecológica se recomienda entre los 13 y 15 años, o al iniciar la vida sexual. A partir de los 21 años, es importante realizar controles periódicos y citología según la orientación del especialista.' },
  { q: '¿Cómo debo prepararme para la consulta ginecológica?', a: 'Para una consulta general no necesitas una preparación especial. Si vas a realizarte una citología, evita relaciones sexuales, cremas vaginales o duchas vaginales 48 horas antes, y procura no estar en tu periodo menstrual.' },
  { q: '¿Con qué frecuencia debo hacerme la citología?', a: 'Se recomienda una vez al año para mujeres entre 21 y 65 años. Si tienes resultados normales continuos, tu ginecólogo puede indicar realizarla cada 3 años con citología sola o cada 5 años con cotesting (citología más VPH).' },
  { q: '¿Puedo acceder a servicios ginecológicos sin EPS?', a: 'Sí. En Cedima IPS puedes acceder a consultas y procedimientos ginecológicos de forma particular, sin largas esperas ni trámites complicados.' },
  { q: '¿Atienden partos en Cedima?', a: 'No. Actualmente en Cedima IPS no realizamos atención de partos. Sin embargo, contamos con consultas ginecológicas, controles prenatales y procedimientos especializados para el cuidado de la salud femenina.' },
]

export default function Ginecologia() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #faf8f3 60%, #f0faf4 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fda4af' }} />
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
                <div className="pkg-hero__icon" style={{ background: '#fde8ee' }}>🌸</div>
                <span className="tag" style={{ background: '#fde8ee', color: '#9f1239' }}>Servicio</span>
              </div>
              <h1 className="pkg-hero__title">
                <em>Ginecología</em> y Salud Femenina
              </h1>
              <p className="pkg-hero__desc">
                Te acompañamos con una atención ginecológica clara, humana y profesional, pensada para cuidar tu bienestar desde la adolescencia hasta la menopausia.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Agendar consulta</a>
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
              {['Atención ginecológica integral', 'Prevención y diagnóstico femenino', 'Seguimiento prenatal especializado', 'Salud hormonal y menopausia', 'Beneficios exclusivos con Plan Cedima'].map(f => (
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
          <p className="pkg-section__label">Nuestros servicios</p>
          <h2 className="pkg-section__title">Salud femenina en cada etapa de tu vida</h2>
          <p className="pkg-section__sub">Atención ginecológica completa con enfoque preventivo, diagnóstico y de bienestar para mujeres de todas las edades.</p>
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
          <p className="pkg-section__label">Tarifas</p>
          <h2 className="pkg-section__title">Servicios disponibles</h2>
          <p className="pkg-section__sub">Consulta nuestros servicios ginecológicos y accede a beneficios especiales con el Plan Cedima.</p>
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
          <h2 className="pkg-section__title">Estamos para orientarte</h2>
          <p className="pkg-section__sub">Información importante antes de tu consulta ginecológica.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Tu salud merece atención especializada 💖</h3>
            <p className="pkg-cta__sub">Agenda tu consulta ginecológica con un equipo profesional que te acompaña en cada etapa.</p>
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
