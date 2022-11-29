import React from 'react'

const Context = React.createContext({})

export function GifsContextProvider ({ children }) {
  const gifs = []
  return (
    <Context.Provider value={{ gifs: [] }}>
      {children}
    </Context.Provider>
  )
}
export default Context
