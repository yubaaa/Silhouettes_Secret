# 💎 Silhouette's Secret — Mini Site

Site officiel du cabinet féminin minceur & nutrition.

## Stack
- **Frontend** : Vite.js + React
- **Backend** : Vercel Serverless Functions
- **Base de données** : Neon (PostgreSQL serverless)
- **Déploiement** : Vercel (gratuit)

---

## 🚀 Déploiement sur Vercel

### 1. Prérequis
- Compte [Vercel](https://vercel.com) (gratuit)
- Compte [Neon](https://neon.tech) (gratuit)

### 2. Base de données Neon
1. Créez un projet sur https://console.neon.tech
2. Copiez la **Connection String** (format `postgresql://...`)
3. La table `reservations` se crée automatiquement au premier formulaire soumis

### 3. Déployer sur Vercel
```bash
# Méthode 1 : Via GitHub (recommandé)
# Poussez ce projet sur GitHub, puis importez-le dans Vercel

# Méthode 2 : Via CLI
npm install -g vercel
vercel login
vercel --prod
```

### 4. Variables d'environnement sur Vercel
Dans votre projet Vercel > Settings > Environment Variables :
```
DATABASE_URL = postgresql://votre_url_neon
```

---

## 💻 Développement local

```bash
npm install
cp .env.example .env.local
# Éditez .env.local avec votre DATABASE_URL Neon

npm run dev
```

Le site sera disponible sur http://localhost:5173

---

## 📁 Structure

```
silhouettes-secret/
├── api/
│   └── reservation.js      # Vercel Serverless — enregistre dans Neon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tarifs.jsx
│   │   ├── Packs.jsx
│   │   └── Reservation.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tout le CSS (thème or & crème)
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 📊 Données collectées (table `reservations`)

| Champ | Type | Description |
|-------|------|-------------|
| prenom | VARCHAR | Prénom de la cliente |
| nom | VARCHAR | Nom de famille |
| telephone | VARCHAR | Numéro de téléphone |
| age | INTEGER | Âge |
| email | VARCHAR | Email |
| services | TEXT | Services souhaités (CSV) |
| message | TEXT | Message libre |
| preferred_date | DATE | Date souhaitée |
| created_at | TIMESTAMPTZ | Date de soumission |
| status | VARCHAR | pending / confirmed / cancelled |

Pour consulter les RDV : accédez à votre console Neon et exécutez :
```sql
SELECT * FROM reservations ORDER BY created_at DESC;
```
