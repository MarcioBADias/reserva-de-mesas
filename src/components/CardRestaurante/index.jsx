import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'

const CardRestaurante = ({ restaurante }) => {
  return (
    <Container>
      <h3>{restaurante.nome}</h3>
      <p>{restaurante.descricao}</p>
      <Link to={`/reserva/${restaurante.id}`}>Ver horários</Link>
    </Container>
  )
}

export { CardRestaurante }
