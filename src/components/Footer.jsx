import React, { useState } from 'react'
import './Footer.css'

const FOOTER_LINKS = [
  {
    heading: 'Únete a Cedima',
    links: [
      { label: 'Employers', href: '#employers' },
      { label: 'Health Plans', href: '#health-plans' },
      { label: 'Individuals', href: '#individuals' },
    ],
  },
  {
    heading: 'Programas',
    links: [
      { label: 'Plan Asistencial Familiar', href: 'paquete-familiar' },
      { label: 'Plan Asistencial Individual', href: 'paquete-medico' },
      { label: 'Plan Asistencial de Salud Integral', href: 'paquete-vip' },
      { label: 'Plan Asistencial de Salud Elite', href: 'paquete-elite' },
    ],
  },
  {
    heading: 'Compañía',
    links: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Trabaja con nosotros', href: '#careers', badge: 'Disponible' },
      { label: 'Precios', href: '#pricing' },
    ],
  },
  
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const buttonClick = () => {
    window.open("https://web.whatsapp.com/send/?phone=573152591449&text&type=phone_number&app_absent=0", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src= "images\cedimaLogo.jpg" className="footer__logo-img" />
              <span className="footer__brand-name">Cedima IPS</span>
            </a>
            <p className="footer__tagline">
              Dándote el mejor servicio al mejor precio.
            </p>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <p className="footer__newsletter-label">Habla con nosotros</p>
              <button className="footer__newsletter-btn" onClick={buttonClick}>
                Contáctanos
              </button>
            </div>

            {/* Social */}
            <div className="footer__social">
              {[
                { label: 'Instagram', img: '/images/IgIconLogo.png', href: 'https://www.instagram.com/cedimaipscol?igsh=MWRuZWxzN2JqeHBwNw==' },
              ].map(s => (
                <a key={s.label} target="_blank" rel="noopener noreferrer" href={s.href} className="footer__social-icon" aria-label={s.label}>
                  {s.img ? (
                    <img src={s.img} alt={s.label} style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  ) : (
                    s.icon
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav className="footer__links">
            {FOOTER_LINKS.map(col => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__col-heading">{col.heading}</h4>
                <ul>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                        {link.badge && <span className="footer__badge">{link.badge}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Cedima SAS Todos los derechos reservados</p>
          <div className="footer__legal">
            {['Términos', 'Privacidad', 'Seguridad', 'Política de Cookies'].map(l => (
              <a key={l} href="#" className="footer__legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}