import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.ficticia.com', // altere para a URL do seu backend
})

const cadastrarReserva = (data) => api.post('/reservas', data)

export { cadastrarReserva }
