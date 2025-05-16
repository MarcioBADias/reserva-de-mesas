import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <h1>Reserva Fácil</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/restaurante">Restaurante</Link>
        <Link to="/cliente">Cliente</Link>
      </nav>
    </Container>
  )
}

export { Header }
