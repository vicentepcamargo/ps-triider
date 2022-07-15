import { createContext, useContext, useEffect, useState } from 'react';

const WidthActiveContext = createContext();

export function WidthActiveProvider({ children }) {

  const [isWidth, setIsWidth] = useState()

  useEffect(() => {
    setIsWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setIsWidth(window.innerWidth)
    })
  })

  return (
    <WidthActiveContext.Provider value={[isWidth, setIsWidth]}>
      {children}
    </WidthActiveContext.Provider>
  )
}

export function useWidthActiveState() {
  return useContext(WidthActiveContext)
}