import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const SERVICES = [
  { icon: '◎', name: 'Cavitation 9en1', desc: 'Technologie ultrasons pour sculpter et affiner votre silhouette en profondeur.' },
  { icon: '✦', name: 'Pressothérapie', desc: 'Drainage lymphatique par compression pour éliminer toxines et cellulite.' },
  { icon: '⊛', name: 'Radiofréquence', desc: 'Raffermissement cutané et remodelage corporel par énergie thermique.' },
  { icon: '❋', name: 'Soins Visage & Cou', desc: 'Soins ciblés pour un teint éclatant, lifting et rajeunissement naturel.' },
  { icon: '◈', name: 'Consultation Nutrition', desc: 'Bilan personnalisé et programme sur mesure avec notre nutritionniste diplômée.' },
  { icon: '◇', name: 'Packs Sculpt', desc: 'Programmes combinés SCULPT X et SCULPT 4X4 pour des résultats visibles.' },
]

export default function Home() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-in').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span>✦ Espace 100% Féminin</span>
            </div>
            <h1 className="hero-title">
              Révélez la<br />
              <em>beauté secrète</em><br />
              de votre corps
            </h1>
            <p className="hero-subtitle">
              Un cabinet d'excellence dédié aux femmes. Minceur, nutrition, soins — des résultats visibles grâce à des technologies de pointe et une approche bienveillante.
            </p>
            <div className="hero-actions">
              <Link to="/reservation" className="btn-primary">
                <span>✦ Prendre Rendez-vous</span>
              </Link>
              <Link to="/packs" className="btn-outline">
                Découvrir nos Packs
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="number">9en1</div>
                <div className="label">Cavitation</div>
              </div>
              <div className="hero-stat">
                <div className="number">100%</div>
                <div className="label">Féminin</div>
              </div>
              <div className="hero-stat">
                <div className="number">✦</div>
                <div className="label">Premium</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-logo-display">
              <img src="/631228474_122122439019043112_1106558180888064463_n - Edited.png" alt="logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header animate-in">
            <span className="label">✦ Ce que nous proposons</span>
            <h2>Nos soins & services</h2>
            <div className="gold-divider" style={{ marginTop: 16 }} />
            <p>Technologies premium et expertise au service de votre transformation</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="service-card animate-in" key={s.name} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="service-icon" style={{ color: 'var(--gold-light)' }}>{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <Link to="/tarifs" className="service-price">Voir les tarifs →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section" style={{ padding: '60px 24px' }}>
        <div className="container">
          <div className="animate-in" style={{
            background: 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold-light) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 200, height: 200,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, right: 120,
              width: 140, height: 140,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
            }} />
            <div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'var(--font-body)' }}>
                ✦ Nouveauté
              </p>
              <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, marginBottom: 8 }}>
                Packs SCULPT X & SCULPT 4X4
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 300, maxWidth: 420 }}>
                Nos nouveaux programmes intensifs combinant plusieurs technologies pour des résultats spectaculaires.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <Link to="/packs" style={{
                padding: '14px 28px',
                background: 'white',
                color: 'var(--gold-deep)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'var(--transition)',
              }}>
                Découvrir
              </Link>
              <Link to="/reservation" style={{
                padding: '14px 28px',
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'var(--transition)',
              }}>
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: 40 }}>
        <div className="container">
          <div className="section-header animate-in">
            <span className="label">✦ Notre engagement</span>
            <h2>Pourquoi choisir Silhouette's Secret ?</h2>
            <div className="gold-divider" style={{ marginTop: 16 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: '♀', title: 'Espace 100% Féminin', text: 'Un cadre intime et sécurisé, réservé exclusivement aux femmes.' },
              { icon: '◈', title: 'Expertise Nutritionnelle', text: 'Votre nutritionniste diplômée pour un suivi personnalisé et efficace.' },
              { icon: '✦', title: 'Technologies Premium', text: 'Équipements de dernière génération pour des résultats optimaux.' },
              { icon: '❋', title: 'Approche Globale', text: 'Corps, visage et nutrition : une prise en charge complète de votre bien-être.' },
            ].map((item, i) => (
              <div key={item.title} className="animate-in" style={{
                textAlign: 'center',
                padding: '32px 20px',
                transitionDelay: `${i * 0.08}s`,
              }}>
                <div style={{
                  width: 64, height: 64,
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  background: 'rgba(184,134,11,0.08)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--gold-light)',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', fontWeight: 300, color: 'var(--text-light)', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
