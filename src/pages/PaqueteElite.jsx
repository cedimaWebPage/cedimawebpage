import React from 'react'
import { Link } from 'react-router-dom'
import './PackagePage.css'
import FAQ from './FAQ'

const BENEFITS = [
  { icon: '💰', bg: '#fef9c3', title: '$800.000 en servicios médicos', desc: 'Disfruta un crédito médico de $800.000 para utilizar en servicios de la red Cedima durante la vigencia de tu plan.' },
  { icon: '📆', bg: '#d4f0df', title: 'Paga tu plan en cuotas', desc: 'Accede al Plan Elite con facilidad de pago en 6, 12 o 24 cuotas, para cuidar tu salud sin afectar tu presupuesto.' },
  { icon: '👨‍👩‍👧‍👦', bg: '#d0f4ea', title: 'Hasta 8 beneficiarios', desc: 'Incluye 1 titular y hasta 8 beneficiarios, para que tu familia también disfrute los beneficios del Plan Elite durante 2 años.' },
  { icon: '🩺', bg: '#ede9fe', title: 'Medicina general gratis todo el año', desc: 'Consulta medicina general sin costo adicional durante la vigencia del plan, para el titular y sus beneficiarios.' },
  { icon: '⭐', bg: '#fde8ee', title: 'Tarifas preferenciales por 2 años', desc: 'Accede durante 24 meses a descuentos exclusivos y tarifas especiales en servicios seleccionados de la red Cedima.' },
  { icon: '🏆', bg: '#fef3c7', title: 'Beneficios exclusivos Elite', desc: 'Disfruta acceso preferencial, gestor de salud personal y descuentos en farmacia, odontología estética y más.' },
]

const SERVICES = [
  { servicio: 'Consulta medicina general', incluido: true, descuento: 'Gratis todo el año' },
  { servicio: 'Consulta especialista', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Laboratorio clínico', incluido: true, descuento: 'Hasta 40%' },
  { servicio: 'Imágenes diagnósticas', incluido: true, descuento: 'Hasta 50%' },
  { servicio: 'Odontología general y estética', incluido: true, descuento: 'Hasta 30%' },
  { servicio: 'Farmacia aliada', incluido: true, descuento: 'Hasta 25%' },
  { servicio: 'Urgencias', incluido: false, descuento: '-' },
  { servicio: 'Crédito en servicios médicos', incluido: true, descuento: '$800.000 COP' },
  { servicio: 'Hospitalización', incluido: false, descuento: '—' },
]

const CUOTAS = [
  { plazo: '6 cuotas', cuota: '$~300.000' },
  { plazo: '12 cuotas', cuota: '$~150.000' },
  { plazo: '24 cuotas', cuota: '$~78.000' },
]

const FAQS = [
  { q: '¿Cómo funciona el beneficio de $800.000 en servicios médicos?', a: 'Al activar tu Plan Elite, cuentas con un saldo disponible de hasta $800.000 en servicios médicos para cuidar tu salud y la de tus beneficiarios durante 24 meses. Puedes usarlo en servicios de la red Cedima, y el saldo se irá actualizando cada vez que hagas uso de tus beneficios.' },
  { q: '¿Cuáles son las opciones de financiación?', a: 'El Plan Elite puede financiarse en 6, 12 o 24 cuotas mediante Sistecrédito o MiPlante con factura EMCALI. Los beneficios se activan desde el primer pago.' },
  { q: '¿Qué pasa si termino de pagar las cuotas antes de los 2 años?', a: 'El Plan Elite mantiene su vigencia de 24 meses, sin importar el plazo de financiación que elijas. Si terminas de pagarlo antes, seguirás disfrutando tus beneficios hasta completar los 2 años.' },
  { q: '¿Los beneficiarios también pueden usar el beneficio de $800.000?', a: 'Sí. El beneficio de $800.000 en servicios médicos puede ser utilizado por el titular y los beneficiarios registrados. El saldo es compartido entre todos durante la vigencia del plan.' },
  { q: '¿Puedo renovar el plan Elite al vencer?', a: 'Sí. Al finalizar los 24 meses, podrás renovar tu Plan Elite y seguir disfrutando tus beneficios. Nuestro equipo te contactará con anticipación para acompañarte en el proceso de renovación.' },
  { q: '¿Hay algún examen médico previo para ingresar al plan?', a: 'No. Para ingresar al Plan Elite no necesitas exámenes médicos previos ni declaración de salud. Tu plan queda activo una vez completes el proceso y formalices el pago.' },
]

export default function PaqueteElite() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className="pkg-hero" style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #faf8f3 60%, #f0faf4 100%)' }}>
        <div className="pkg-hero__bg">
          <div className="pkg-hero__blob pkg-hero__blob--1" style={{ background: '#fcd34d' }} />
          <div className="pkg-hero__blob pkg-hero__blob--2" style={{ background: '#a8e0bf' }} />
        </div>
        <div className="container">
          <Link to="/" className="pkg-hero__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver a programas
          </Link>
          <div className="pkg-hero__inner">
            <div>
              <div className="pkg-hero__badge">
                <div className="pkg-hero__icon" style={{ background: '#fef9c3' }}>🤵</div>
                <span className="tag" style={{ background: '#fef3c7', color: '#92400e' }}>Plan Elite — 2 años</span>
              </div>
              <h1 className="pkg-hero__title">
                Plan Asistencial de <em>Salud Elite</em>
              </h1>
              <p className="pkg-hero__desc">
                El plan más completo de Cedima. Fináncialo hasta en 24 cuotas, accede a $800.000 en servicios médicos, consultas gratis todo el año y beneficios exclusivos por 2 años para toda tu familia.
              </p>
              <div className="pkg-hero__actions">
                <a href="#contacto" className="btn btn-primary">Adquirir plan Elite</a>
                <a href="#financiacion" className="btn btn-outline">Ver cuotas</a>
              </div>
            </div>
            <div className="pkg-price-card" style={{ borderColor: '#fcd34d' }}>
              <div className="pkg-price-card__header">
                <span className="pkg-price-card__label">Valor del plan</span>
                <span className="pkg-price-card__badge" style={{ background: '#fef3c7', color: '#92400e', padding: '3px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 500 }}>Elite 🏆</span>
              </div>
              <div className="pkg-price-card__amount">
                <span className="pkg-price-card__currency" style={{ color: '#b45309' }}>$</span>
                <span className="pkg-price-card__number" style={{ color: '#92400e' }}>1.500.000</span>
                <span className="pkg-price-card__period">/ 2 años</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-soft)', marginTop: -8 }}>O financiable desde $78.000/mes</p>
              <div className="pkg-price-card__divider" />
              <p className="pkg-price-card__includes">Incluye</p>
              {['1 titular + hasta 8 beneficiarios', '$800.000 en servicios médicos', 'Medicina general gratis todo el año', 'Hasta 50% de descuento en especialidades', 'Vigencia de 24 meses', 'Financiable en 6, 12 o 24 cuotas'].map(f => (
                <div key={f} className="pkg-price-card__feature">
                  <div className="pkg-price-card__check" style={{ background: '#fef3c7' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '4px' }}>Quiero mi Plan Elite</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pkg-section">
        <div className="container">
          <p className="pkg-section__label">Beneficios Elite</p>
          <h2 className="pkg-section__title">Cuidado completo para tu familia por 2 años</h2>
          <p className="pkg-section__sub">Accede al plan más completo de Cedima con beneficios exclusivos, tarifas preferenciales y una cobertura pensada para acompañar a tu familia por más tiempo.</p>
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

      {/* Financiación table */}
      <section className="pkg-section pkg-section--alt" id="financiacion">
        <div className="container">
          <p className="pkg-section__label">PAGO FLEXIBLE</p>
          <h2 className="pkg-section__title">Activa tu Plan Elite y págalo a tu ritmo</h2>
          <p className="pkg-section__sub">Accede al plan más completo de Cedima por 2 años, con opciones de financiación a través de Sistecrédito o MiPlante, usando tu factura de servicios públicos de EMCALI. Tus beneficios comienzan desde el primer pago.</p>
          <div className="pkg-table-wrap" style={{ marginBottom: 48 }}>
            <table className="pkg-table">
              <thead>
                <tr><th>Plazo</th><th>Cuota mensual aprox.</th><th>Total a pagar</th></tr>
              </thead>
              <tbody>
                {CUOTAS.map(c => (
                  <tr key={c.plazo}>
                    <td style={{ fontWeight: 500 }}>{c.plazo}</td>
                    <td>{c.cuota}</td>
                    <td>{c.total}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ fontWeight: 500 }}>Pago único</td>
                  <td>—</td>
                  <td style={{ fontWeight: 500, color: 'var(--green-600)' }}>$1.500.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="pkg-section__label">Cobertura completa</p>
          <h2 className="pkg-section__title" style={{ marginBottom: 12 }}>Servicios incluidos</h2>
          <p className="pkg-section__sub">La cobertura más amplia de toda la línea de planes Cedima.</p>
          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr><th>Servicio</th><th>Incluido</th><th>Descuento / Beneficio</th></tr>
              </thead>
              <tbody>
                {SERVICES.map(s => (
                  <tr key={s.servicio}>
                    <td>{s.servicio}</td>
                    <td>{s.incluido ? <span className="pkg-table__yes">✓ Sí</span> : <span className="pkg-table__no">—</span>}</td>
                    <td>{s.descuento}</td>
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
          <h2 className="pkg-section__title">Todo sobre el Plan Elite</h2>
          <p className="pkg-section__sub">Resolvemos tus dudas sobre el plan más completo de Cedima.</p>
          <FAQ items={FAQS} />
        </div>
      </section>

      <div className="container" id="contacto">
        <div className="pkg-cta">
          <div className="pkg-cta__text">
            <h3 className="pkg-cta__title">Cuida la salud de tu familia por 2 años🏆</h3>
            <p className="pkg-cta__sub">Accede al Plan Elite con cobertura completa y financiación desde $78.000 al mes.</p>
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
