import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TARIF_SECTIONS = [
  {
    title: 'Cavitation 9en1',
    icon: '◎',
    items: [
      { name: 'Séance simple (30 min)', price: '2 500 DA' },
      { name: 'Séance complète (60 min)', price: '4 500 DA' },
      { name: 'Forfait 6 séances', price: '26 000 DA' },
      { name: 'Forfait 10 séances', price: '40 000 DA' },
    ]
  },
  {
    title: 'Pressothérapie',
    icon: '✦',
    items: [
      { name: 'Séance simple', price: '2 000 DA' },
      { name: 'Séance intensive (50 min)', price: '4 000 DA' },
      { name: 'Forfait 5 séances', price: '17 000 DA' },
      { name: 'Forfait 10 séances', price: '30 000 DA' },
    ]
  },
  {
    title: 'Radiofréquence',
    icon: '⊛',
    items: [
      { name: 'Visage (30 min)', price: '3 000 DA' },
      { name: 'Visage + Cou', price: '4 000 DA' },
      { name: 'Forfait 5 séances visage + cou', price: '17 000 DA' },
    ]
  },
  {
    title: 'Consultation Nutrition',
    icon: '◈',
    items: [
      { name: 'Bilan initial (1h)', price: '1 000 DA' },
      { name: 'Suivi mensuel', price: '8 000 DA' },
      { name: 'Programme 2 mois', price: '1 5000 DA' },
      { name: 'Programme 3 mois', price: '21 000 DA' },
    ]
  },
  {
    title: 'Electrostimulation & Autres',
    icon: '◇',
    items: [
      { name: 'Electrostimulation (30 min)', price: '1 000 DA' },
      { name: 'Massage modelant', price: '1 500 DA' },
    ]
  },
]

export default function Tarifs() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.animate-in').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)', display: 'block', marginBottom: 12 }}>
          ✦ Transparence & Excellence
        </span>
        <h1>Nos Tarifs</h1>
        <div className="gold-divider" style={{ marginTop: 16, marginBottom: 16 }} />
        <p>Des tarifs clairs et accessibles pour des soins premium, exclusivement féminins</p>
      </div>

      <section className="section">
        <div className="container">
          {TARIF_SECTIONS.map((section, si) => (
            <div key={section.title} className="animate-in" style={{ marginBottom: 48, transitionDelay: `${si * 0.06}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <span style={{ fontSize: '1.3rem', color: 'var(--gold-light)' }}>{section.icon}</span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'var(--text-dark)',
                }}>
                  {section.title}
                </h2>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border-strong), transparent)', marginLeft: 8 }} />
              </div>
              <div className="tarifs-grid">
                {section.items.map(item => (
                  <div key={item.name} className="tarif-item">
                    <span className="tarif-name">{item.name}</span>
                    <span className="tarif-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="animate-in" style={{
            marginTop: 40,
            padding: '28px 32px',
            background: 'rgba(184,134,11,0.04)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.4rem', color: 'var(--gold-light)', flexShrink: 0 }}>✦</span>
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-dark)', marginBottom: 6 }}>
                Tarifs indicatifs — consultez nos packs pour bénéficier de réductions importantes
              </p>
              <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-light)' }}>
                Les forfaits et packs vous permettent d'économiser jusqu'à 30% par rapport aux séances individuelles. Un bilan gratuit est offert lors de votre première visite.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/reservation" className="btn-primary">
              <span>✦ Réserver ma séance</span>
            </Link>
            <Link to="/packs" className="btn-outline" style={{ marginLeft: 16 }}>
              Voir nos Packs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
