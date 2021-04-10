import React, { createContext, useState } from 'react'

type PetProfile = {
  id: string
  name: string
  type: string
  breed: string
  genere: string
  features: string
}
export type AppContextInterface = {
  configValue: {
    data?: void
  }
  profile?: PetProfile[]
  setProfile?: PetProfile[]
}

const AppContext = createContext<AppContextInterface>({} as AppContextInterface)

export const AppProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState()
  const [configValue, setConfigValue] = useState({})

  return (
    <AppContext.Provider
      value={{ configValue, setConfigValue, profile, setProfile }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
