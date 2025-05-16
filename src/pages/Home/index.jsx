import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <h1>Bem-vindo ao Reserva de Mesas</h1>
      <p>Escolha seu restaurante e faça sua reserva!</p>
      <div>
        <Link to="/restaurante">Sou Restaurante</Link>
        <Link to="/cliente">Sou Cliente</Link>
      </div>
    </Container>
  )
}

export { Home }
