// api/reservation.js
// Vercel Serverless Function — Neon DB integration
// Deploy on Vercel. Set environment variable: DATABASE_URL=your_neon_connection_string

import { neon } from '@neondatabase/serverless'

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Check DB connection
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL not set')
    return res.status(500).json({ message: 'Database not configured' })
  }

  try {
    const sql = neon(process.env.DATABASE_URL)
    const {
      prenom,
      nom,
      telephone,
      age,
      email,
      services,
      message,
      preferred_date,
      created_at,
    } = req.body

    // Validate required fields
    if (!prenom || !nom || !telephone) {
      return res.status(400).json({ message: 'Champs obligatoires manquants' })
    }

    // Create table if not exists (idempotent)
    await sql`
      CREATE TABLE IF NOT EXISTS reservations (
        id SERIAL PRIMARY KEY,
        prenom VARCHAR(100) NOT NULL,
        nom VARCHAR(100) NOT NULL,
        telephone VARCHAR(30) NOT NULL,
        age INTEGER,
        email VARCHAR(200),
        services TEXT,
        message TEXT,
        preferred_date DATE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        status VARCHAR(50) DEFAULT 'pending'
      )
    `

    // Insert reservation
    const result = await sql`
      INSERT INTO reservations
        (prenom, nom, telephone, age, email, services, message, preferred_date, created_at)
      VALUES
        (
          ${prenom},
          ${nom},
          ${telephone},
          ${age ? parseInt(age) : null},
          ${email || null},
          ${services || null},
          ${message || null},
          ${preferred_date || null},
          ${created_at || new Date().toISOString()}
        )
      RETURNING id, prenom, nom, created_at
    `

    return res.status(200).json({
      success: true,
      message: 'Demande de rendez-vous enregistrée avec succès',
      data: result[0],
    })

  } catch (error) {
    console.error('DB Error:', error)
    return res.status(500).json({
      message: 'Erreur lors de l\'enregistrement. Veuillez réessayer.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
