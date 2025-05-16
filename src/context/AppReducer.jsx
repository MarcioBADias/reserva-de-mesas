const initialState = {
  usuario: null,
  restaurantes: [],
  reservas: [],
}

const appReducer = (state, action) => {
  if (action.type === 'SET_USUARIO') {
    return { ...state, usuario: action.payload }
  }
  if (action.type === 'SET_RESTAURANTES') {
    return { ...state, restaurantes: action.payload }
  }
  if (action.type === 'SET_RESERVAS') {
    return { ...state, reservas: action.payload }
  }
  return state
}

export { appReducer, initialState }
