import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/tarifs', label: 'Tarifs' },
    { to: '/packs', label: 'Packs' },
    { to: '/reservation', label: 'Réservation' },
  ]

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: '0 4px 30px rgba(184,134,11,0.08)' } : {}}>
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21" stroke="#B8860B" strokeWidth="1"/>
            <text x="22" y="28" textAnchor="middle" fill="#B8860B" fontFamily="Cormorant Garamond, serif" fontSize="18" fontWeight="300">S</text>
          </svg>
          <div className="nav-logo-text">
            <span className="name">Silhouette's Secret</span>
            <span className="tagline">Cabinet Féminin — Minceur & Nutrition</span>
          </div>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link to="/reservation" className="btn-primary">
            <span>✦ Prendre RDV</span>
          </Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link to="/reservation" className="btn-primary" onClick={() => setMenuOpen(false)}>
          <span>✦ Prendre RDV</span>
        </Link>
      </div>
    </>
  )
}
