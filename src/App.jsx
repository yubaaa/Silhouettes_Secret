import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tarifs from './pages/Tarifs'
import Packs from './pages/Packs'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <>
      <div className="texture-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
