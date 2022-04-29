import { useRouter } from 'next/router'
import * as React from 'react'
import { useContext, useEffect, useState } from 'react'

import { addZones, app, auth, getZones } from '../firebase'
import { DefaultListModel } from '../models/DefaultList.interface'

export interface IAppContext {
  children?: React.ReactNode
  auth?: boolean
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC<IAppContext> = (props) => {
  const { children } = props
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
        router.push("/")
      }
    })
  }, [])

  return <AppContext.Provider value={{ auth: authenticated }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
