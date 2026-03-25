import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PACKS = [
  {
    tag: 'Best-seller',
    name: 'SCULPT X',
    subtitle: 'Le programme sculpture intensif',
    price: '50 000',
    oldPrice: '55 000 DA',
    currency: 'DA',
    featured: true,
    includes: [
      '8 séances de Cavitation 9en1',
      '6 séances de Pressothérapie',
      '1 bilan nutritionnel complet',
      'Programme alimentaire personnalisé',
      'Suivi mensuel offert',
    ],
    ideal: 'Idéal pour : Remodelage, élimination cellulite, affinage silhouette',
  },
  {
    tag: 'Nouveau',
    name: 'SCULPT 4X4',
    subtitle: 'Le programme total transformation',
    price: '35 000',
    oldPrice: '40 000 DA',
    currency: 'DA',
    featured: true,
    includes: [
      '4 séances de Cavitation 9en1',
      '4 séances de Pressothérapie',
      '+2 séances de Radiofréquence corps',
      '1 soins Visage & Cou',
      '2 consultations nutritionnelles',
      'Programme alimentaire sur-mesure 4 semaines',
      'Électrostimulation 4 séances',
    ],
    ideal: 'Idéal pour : Transformation complète sur 4 semaines — résultats visibles',
  },
  {
    tag: 'Visage',
    name: 'GLOW FACE',
    subtitle: 'Éclat et jeunesse du visage',
    price: '12 000',
    oldPrice: '16 000 DA',
    economy: 'Économie 25%',
    currency: 'DA',
    includes: [
      '4 soins visage anti-âge',
      '4 séances radiofréquence visage',
      '4 séances radiofréquence cou',
      'Conseils cosmétiques personnalisés',
    ],
    ideal: 'Idéal pour : Lifting naturel, éclat, anti-rides',
  },
  {
    tag: 'Découverte',
    name: 'STARTER',
    subtitle: 'Votre 1ère expérience premium',
    price: '8 000 DA',
    oldPrice: '13 500 DA',
    currency: 'DA',
    includes: [
      '1 séance de cavitation découverte',
      '1 séance de pressothérapie',
      '1 soin visage éclat',
      '1 consultation nutrition offerte',
    ],
    ideal: 'Idéal pour : Découvrir nos services avant de s\'engager',
  },
]

export default function Packs() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      }),
      { threshold: 0.05 }
    )
    document.querySelectorAll('.animate-in').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)', display: 'block', marginBottom: 12 }}>
          ✦ Programmes sur-mesure
        </span>
        <h1>Nos Packs & Programmes</h1>
        <div className="gold-divider" style={{ marginTop: 16, marginBottom: 16 }} />
        <p>Des programmes pensés pour vous offrir les meilleurs résultats au meilleur prix</p>
      </div>

      {/* Highlight banner for SCULPT packs */}
      <div style={{ background: 'linear-gradient(135deg, rgba(139,105,20,0.06) 0%, rgba(201,168,76,0.08) 100%)', borderBottom: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>✦ Nouveauté 2025</span>
          <span style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400 }}>
            Les packs <em style={{ color: 'var(--gold-deep)' }}>SCULPT X</em> et <em style={{ color: 'var(--gold-deep)' }}>SCULPT 4X4</em> sont disponibles — résultats garantis
          </span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="packs-grid">
            {PACKS.map((pack, i) => (
              <div
                key={pack.name}
                className={`pack-card animate-in ${pack.featured ? 'featured' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {pack.featured && <div className="pack-featured-badge">✦ Recommandé</div>}

                <div className="pack-header">
                  <span className="pack-tag">{pack.tag}</span>
                  <h3>{pack.name}</h3>
                  <p className="pack-subtitle">{pack.subtitle}</p>
                </div>

                <div className="pack-price-block">
                  <span className="currency">{pack.currency}</span>
                  <span className="price">{pack.price}</span>
                  <span className="old-price">{pack.oldPrice}</span>
                  <span className="economy">{pack.economy}</span>
                </div>

                <div className="pack-body">
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 12, fontWeight: 500 }}>Ce qui est inclus :</p>
                  <ul className="pack-includes">
                    {pack.includes.map(inc => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                  {pack.ideal && (
                    <p style={{ marginTop: 16, fontSize: '0.78rem', fontWeight: 300, color: 'var(--gold-deep)', fontStyle: 'italic', lineHeight: 1.5 }}>
                      {pack.ideal}
                    </p>
                  )}
                </div>

                <div className="pack-footer">
                  <Link to="/reservation" className={pack.featured ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Choisir ce pack</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-in" style={{ textAlign: 'center', marginTop: 60 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-light)', marginBottom: 24 }}>
              Un pack sur-mesure ? Contactez-nous pour un programme personnalisé selon vos objectifs.
            </p>
            <Link to="/reservation" className="btn-primary">
              <span>✦ Réserver & Choisir mon pack</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
