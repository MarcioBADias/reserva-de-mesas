import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

const Cliente = () => {
  return (
    <Container>
      <h2>Escolha um Restaurante</h2>
      <div>
        <Link to="/reserva/1">Restaurante A</Link>
        <Link to="/reserva/2">Restaurante B</Link>
      </div>
    </Container>
  )
}

export { Cliente }
