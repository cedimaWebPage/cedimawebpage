import React, { useState } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: "Pude agendar mi cita con especialista en pocos días y la atención fue excelente desde el inicio. Todo el proceso fue mucho más rápido de lo que esperaba.",
    name: 'Laura M.',
    role: 'Paciente Cedima IPS',
    initials: 'LM',
    color: '#1d7a4a',
  },
  {
    quote: "Excelente atención y especialistas muy profesionales.",
    name: 'María G.',
    role: 'Paciente Cedima IPS',
    initials: 'MG',
    color: '#0ea5e9',
  },
  {
    quote: "El Plan Familiar nos ayudó muchísimo con consultas y descuentos.",
    name: 'Carlos R.',
    role: 'Paciente Cedima IPS',
    initials: 'CR',
    color: '#7c3aed',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials section section--cream" id="stories">
      <div className="container">
        <div className="testimonials__header">
          <span className="tag">EXPERIENCIAS CEDIMA</span>
          <h2>
            Historias reales de <span className="text-green italic">  nuestros pacientes</span> 
          </h2>
          <p className="text-soft" style={{ maxWidth: 480, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Conoce cómo Cedima IPS acompaña a familias en Cali con atención médica más cercana, rápida y accesible.
          </p>
        </div>

        <div className="testimonials__body">
          {/* Main quote */}
          <div className="testimonial__card" key={active}>
            <div className="testimonial__quote-mark">"</div>
            <blockquote className="testimonial__text">{t.quote}</blockquote>
            <div className="testimonial__author">
              <div className="testimonial__avatar" style={{ background: t.color + '22', color: t.color }}>
                {t.initials}
              </div>
              <div>
                <p className="testimonial__name">{t.name}</p>
                <p className="testimonial__role">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="testimonials__nav">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={i}
                className={`testimonials__dot${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Side cards */}
          <div className="testimonials__side">
            {TESTIMONIALS.filter((_, i) => i !== active).map((item, i) => (
              <button
                key={i}
                className="testimonial__side-card"
                onClick={() => setActive(TESTIMONIALS.indexOf(item))}
              >
                <div className="testimonial__avatar testimonial__avatar--sm" style={{ background: item.color + '22', color: item.color }}>
                  {item.initials}
                </div>
                <div>
                  <p className="testimonial__name">{item.name}</p>
                  <p className="testimonial__role">{item.role}</p>
                  <p className="testimonial__preview">"{item.quote.slice(0, 60)}…"</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}