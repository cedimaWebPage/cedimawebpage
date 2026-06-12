import React, { useState, useEffect } from "react";
import { href, Link } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  {
    label: "¿Por qué Cedima?",
    children: [
      { label: "Nosotros", href: "/" },
      { label: "Precios", href: "#programs" },
    ],
  },
  {
    label: "Programas",
    children: [
      { label: "Plan Asistencial Familiar", href: "/paquete-familiar" },
      { label: "Plan Asistencial Individual", href: "/paquete-medico" },
      { label: "Plan Asistencial Integral", href: "/paquete-vip" },
      { label: "Plan Asistencial de Salud Elite", href: "/paquete-elite" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { label: "Imágenes Diagnósticas", href: "/servicios/radiologia" },
      {
        label: "Servicios Especializados",
        children: [
          { label: "Procedimientos", href: "/servicios/Procedimientos" },
          { label: "Ginecologia", href: "/servicios/ginecologia" },
          {
            label: "Consulta Especializada",
            href: "/servicios/consulta-especializada",
          },
        ],
      },
      { label: "Cirugia Programada", href: "/servicios/cirugia-programada" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo" href="https://www.cedimaips.com/">
          <img
            src="\images\cedimaLogo.jpg"
            alt="Cedima IPS"
            height="40"
            style={{ width: "auto" }}
          />
          <span className="navbar__brand">Cedima IPS</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" onMouseLeave={() => setOpen(null)}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`navbar__item navbar__item--dropdown${open === link.label ? " is-open" : ""}`}
                onMouseEnter={() => setOpen(link.label)}
              >
                <button className="navbar__link">
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="navbar__dropdown">
                  {link.children.map((c) =>
                    c.children ? (
                      <div key={c.label} className="navbar__nested-item">
                        <button className="navbar__dropdown-link navbar__dropdown-link--has-children">
                          {c.label}
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                              d="M4 2l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <div className="navbar__nested-dropdown">
                          {c.children.map((sub) =>
                            sub.href.startsWith("/") ? (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="navbar__dropdown-link"
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="navbar__dropdown-link"
                              >
                                {sub.label}
                              </a>
                            ),
                          )}
                        </div>
                      </div>
                    ) : c.href.startsWith("/") ? (
                      <Link
                        key={c.label}
                        to={c.href}
                        className="navbar__dropdown-link"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <a
                        key={c.label}
                        href={c.href}
                        className="navbar__dropdown-link"
                      >
                        {c.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* CTAs */}
        <div className="navbar__ctas"></div>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${mobileOpen ? " is-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="navbar__mobile-group">
                <span className="navbar__mobile-label">{link.label}</span>

                {link.children.map((c) => (
                  <div key={c.label} className="navbar__mobile-item-wrapper">
                    {/* Tier 2: Check if it has sub-children */}
                    {c.children ? (
                      <>
                        {/* Non-clickable label header for things like "Consulta Especializada" */}
                        <span className="navbar__mobile-link navbar__mobile-link--has-children">
                          {c.label}
                        </span>

                        {/* Tier 3: Render the nested sub-children directly beneath it */}
                        <div className="navbar__mobile-nested-group">
                          {c.children.map((sub) =>
                            sub.href.startsWith("/") ? (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="navbar__mobile-link navbar__mobile-link--nested"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="navbar__mobile-link navbar__mobile-link--nested"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </a>
                            ),
                          )}
                        </div>
                      </>
                    ) : c.href.startsWith("/") ? (
                      /* Regular Tier 2 Internal Link */
                      <Link
                        to={c.href}
                        className="navbar__mobile-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ) : (
                      /* Regular Tier 2 External Link */
                      <a
                        href={c.href}
                        className="navbar__mobile-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Top Level Link with no children */
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  );
}
