import { createContext, useReducer } from 'react'
import { appReducer, initialState } from './AppReducer'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
