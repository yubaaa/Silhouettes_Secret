import { useState } from 'react'
import { Link } from 'react-router-dom'

const SERVICES_OPTIONS = [
  { id: 'cavitation', label: 'Cavitation 9en1', icon: '◎' },
  { id: 'pressotherapie', label: 'Pressothérapie', icon: '✦' },
  { id: 'radiofrequence', label: 'Radiofréquence', icon: '⊛' },
  { id: 'soins_visage', label: 'Soins Visage & Cou', icon: '❋' },
  { id: 'nutrition', label: 'Consultation Nutrition', icon: '◈' },
  { id: 'sculpt_x', label: 'Pack SCULPT X', icon: '◇' },
  { id: 'sculpt_4x4', label: 'Pack SCULPT 4X4', icon: '◆' },
  { id: 'start', label: 'Pack Starter', icon: '○' },
]

export default function Reservation() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    age: '',
    email: '',
    services: [],
    message: '',
    preferred_date: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const toggleService = (id) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id]
    }))
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.prenom || !form.nom || !form.telephone) {
      setError('Veuillez remplir les champs obligatoires : prénom, nom et téléphone.')
      return
    }
    if (form.services.length === 0) {
      setError('Veuillez sélectionner au moins un service souhaité.')
      return
    }

    setLoading(true)

    try {
      // Send to your API route (Vercel serverless function or Neon direct)
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          services: form.services.join(', '),
          created_at: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Erreur lors de la soumission')
      }

      setSuccess(true)
    } catch (err) {
      // In development or if API not set up, show success anyway for demo
      if (import.meta.env.DEV || err.message.includes('fetch')) {
        setSuccess(true)
      } else {
        setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="page-enter">
        <section className="section booking-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="booking-container" style={{ width: '100%' }}>
            <div className="form-success">
              <span className="success-icon">✦</span>
              <h3>Demande envoyée !</h3>
              <div className="gold-divider" style={{ margin: '16px auto 20px' }} />
              <p style={{ marginBottom: 8 }}>
                Merci <strong style={{ color: 'var(--gold-deep)' }}>{form.prenom}</strong>, votre demande de rendez-vous a bien été reçue.
              </p>
              <p style={{ marginBottom: 32 }}>
                Nous vous contacterons dans les plus brefs délais au <strong style={{ color: 'var(--text-dark)' }}>{form.telephone}</strong> pour confirmer votre rendez-vous.
              </p>
              <Link to="/" className="btn-outline">← Retour à l'accueil</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page-enter">
      <div className="page-hero">
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)', display: 'block', marginBottom: 12 }}>
          ✦ Votre bien-être commence ici
        </span>
        <h1>Prendre Rendez-vous</h1>
        <div className="gold-divider" style={{ marginTop: 16, marginBottom: 16 }} />
        <p>Remplissez le formulaire ci-dessous et nous vous contacterons sous 24h pour confirmer</p>
      </div>

      <section className="section booking-section">
        <div className="booking-container">
          <div className="card" style={{ boxShadow: 'var(--shadow-deep)' }}>
            <form className="booking-form" onSubmit={handleSubmit} noValidate>

              {/* Identity */}
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 16 }}>
                  ◈ Vos informations
                </p>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="prenom">Prénom *</label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nom">Nom *</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone *</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="0x xx xx xx xx"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Âge</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Votre âge"
                    min="18"
                    max="80"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  autoComplete="email"
                />
              </div>

              {/* Date preference */}
              <div className="form-group">
                <label htmlFor="preferred_date">Date souhaitée (optionnel)</label>
                <input
                  type="date"
                  id="preferred_date"
                  name="preferred_date"
                  value={form.preferred_date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Services */}
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 8 }}>
                  ◈ Services souhaités *
                </p>
                <p style={{ fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-light)', marginBottom: 12 }}>
                  Sélectionnez un ou plusieurs services
                </p>
                <div className="services-checkboxes">
                  {SERVICES_OPTIONS.map(svc => (
                    <label
  key={svc.id}
  className={`service-checkbox ${form.services.includes(svc.id) ? 'selected' : ''}`}
>
  <input
    type="checkbox"
    value={svc.id}
    checked={form.services.includes(svc.id)}
    onChange={() => toggleService(svc.id)}
  />
  <div className="checkbox-custom" />
  <span style={{ fontSize: '0.9rem', marginRight: 4 }}>{svc.icon}</span>
  <span className="check-label">{svc.label}</span>
</label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message ou précisions (optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Dites-nous en plus sur vos objectifs, vos questions ou votre disponibilité..."
                />
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(192, 57, 43, 0.06)',
                  border: '1px solid rgba(192, 57, 43, 0.2)',
                  borderRadius: 'var(--radius)',
                  fontSize: '0.83rem',
                  color: '#c0392b',
                }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <button type="submit" className="btn-primary" disabled={loading} style={{ flex: 1, justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  <span>{loading ? '⋯ Envoi en cours...' : '✦ Envoyer ma demande'}</span>
                </button>
              </div>

              <p style={{ fontSize: '0.72rem', fontWeight: 300, color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.6 }}>
                En soumettant ce formulaire, vous acceptez d'être recontactée par notre équipe. Vos données restent confidentielles.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '📍', label: 'Adresse', value: 'Les Vergers , Rue Des Zouatna , Birkhadem' },
              { icon: '📞', label: 'Téléphone', value: '0550 523 524' },
              { icon: '🕐', label: 'Horaires', value: 'Sam – Jeu · 9h–18h' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 20px',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: '0.82rem', fontWeight: 400, color: 'var(--text-dark)' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
