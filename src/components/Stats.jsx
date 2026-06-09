import React, { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  { value: 20, suffix: '+', label: 'Especialidades médicas', desc: 'Atención en medicina general, ginecología, dermatología, urología y más en Cali.' },
  { value: 3, suffix: 'Días', label: 'Citas más rápidas', desc: 'Agenda consultas con especialistas en tiempos mucho más ágiles.' },
  { value: 50, suffix: '%', label: 'Descuentos exclusivos', desc: 'Beneficios especiales en consultas, procedimientos y servicios médicos seleccionados.' },
  { value: 8, suffix: '+', label: 'Cobertura familiar', desc: 'Planes diseñados para cuidar la salud de toda tu familia en un solo lugar.' },
]

function useCountUp(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1200
    const step = 16
    const inc = target / (duration / step)
    const timer = setInterval(() => {
      start += inc
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function StatCard({ value, suffix, label, desc, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="stat-card">
      <div className="stat-card__number">
        {count}<span className="stat-card__suffix">{suffix}</span>
      </div>
      <div className="stat-card__divider" />
      <h3 className="stat-card__label">{label}</h3>
      <p className="stat-card__desc">{desc}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="stats section section--dark" ref={ref}>
      <div className="container">
        <div className="stats__header">
          <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--green-100)' }}>Resultados Demostrados</span>
          <h2 className="stats__title">
            Más acceso a salud,{' '}
            <span className="italic" style={{ color: 'var(--green-200)' }}>menos barreras</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, fontSize: '1.05rem', lineHeight: 1.7 }}>
            En Cedima IPS trabajamos para que puedas acceder a consultas, especialistas y procedimientos médicos en menos tiempo, con atención profesional y beneficios reales para tu familia.
          </p>
        </div>
        <div className="stats__grid">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
        <div className="stats__footnote">
          
        </div>
      </div>
    </section>
  )
}