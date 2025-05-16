import React from 'react'
import { Container } from './style'

const ReservaItem = ({ reserva }) => {
  return (
    <Container>
      <p>
        <strong>Data:</strong> {reserva.data}
      </p>
      <p>
        <strong>Horário:</strong> {reserva.horario}
      </p>
      <p>
        <strong>Restaurante:</strong> {reserva.restaurante}
      </p>
    </Container>
  )
}

export default ReservaItem
