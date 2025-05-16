import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style'

const Reserva = () => {
  const { id } = useParams()
  return (
    <Container>
      <h2>Reserva para o Restaurante {id}</h2>
      <p>Escolha a data e hora disponíveis para sua reserva!</p>
      {/* preciso criar a lógica para escolher a data e hora */}
      <button>Confirmar Reserva - Taxa de R$ 6,00</button>
    </Container>
  )
}

export { Reserva }
