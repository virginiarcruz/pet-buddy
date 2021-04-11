import React, { createContext, useState } from 'react'

type IPetProfile = {
  id: string
  Name: string
  type: string
  breed: string
  genere: string
  features: string
}

type IData = {
  Data: IPetProfile[]
}
export type AppContextInterface = {
  configValue: {
    data?: unknown
  }
  profile?: IPetProfile[]
  setProfile?: IData
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
