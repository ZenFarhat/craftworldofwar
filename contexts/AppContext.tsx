import { useRouter } from 'next/router'
import * as React from 'react'
import { useContext, useEffect, useState } from 'react'

import { addZones, app, auth, getPlayer, getZones } from '../firebase'
import { DefaultListModel } from '../models/DefaultList.interface'
import { PlayerModel } from '../models/Player.interface'

export interface IAppContext {
  children?: React.ReactNode
  player?: PlayerModel
  auth?: boolean
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC<IAppContext> = (props) => {
  const { children } = props
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [player, setPlayer] = useState<PlayerModel>()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true)
        getPlayer(user.uid).then((player) => {
          setPlayer(player)
        })
      } else {
        setAuthenticated(false)
        router.push('/')
      }
    })
  }, [])

  return (
    <AppContext.Provider value={{ auth: authenticated, player }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
