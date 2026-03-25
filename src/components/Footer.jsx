import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="name">Silhouette's Secret</p>
          <p>Cabinet féminin dédié à votre beauté, votre minceur et votre bien-être. Un espace exclusivement féminin, pensé pour vous.</p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <a href="https://www.instagram.com/silhouette.s_secret/" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.25s' }}
              onMouseOver={e => e.target.style.color = 'var(--gold-pale)'}
              onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
              Instagram
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <a href="https://www.facebook.com/61581293380253" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.25s' }}
              onMouseOver={e => e.target.style.color = 'var(--gold-pale)'}
              onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/tarifs">Tarifs</Link></li>
            <li><Link to="/packs">Nos Packs</Link></li>
            <li><Link to="/reservation">Réservation</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Nos Services</h4>
          <ul>
            <li><a href="#">Cavitation 9en1</a></li>
            <li><a href="#">Pressothérapie</a></li>
            <li><a href="#">Radiofréquence</a></li>
            <li><a href="#">Soins Visage & Cou</a></li>
            <li><a href="#">Consultation Nutrition</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Silhouette's Secret — Tous droits réservés</p>
        <span className="reserved">Espace 100% Féminin ✦</span>
      </div>
    </footer>
  )
}
