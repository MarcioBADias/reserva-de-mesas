import React, { useState } from 'react'
import { Container } from './style'

const Restaurante = () => {
  const [horarios, setHorarios] = useState([])
  const [hora, setHora] = useState('')

  const handleAdicionarHorario = () => {
    setHorarios([...horarios, hora])
    setHora('')
  }

  return (
    <Container>
      <h2>Cadastro de Horários</h2>
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        placeholder="Selecione um horário"
      />
      <button onClick={handleAdicionarHorario}>Adicionar Horário</button>
      <ul>
        {horarios.map((hora, index) => (
          <li key={index}>{hora}</li>
        ))}
      </ul>
    </Container>
  )
}

export { Restaurante }
