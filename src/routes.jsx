import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Restaurante } from './pages/Restaurante'
import { Cliente } from './pages/Cliente'
import { Reserva } from './pages/Reserva'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/reserva/:id" element={<Reserva />} />
      </Routes>
    </Router>
  )
}

export { AppRoutes }
