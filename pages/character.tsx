import MainLayoutComponent from '../components/MainLayoutComponent'
import { useAppContext } from '../contexts/AppContext'

import type { NextPage } from 'next'
const Character: NextPage = () => {
  const { player } = useAppContext()

  return (
    <div>
      <MainLayoutComponent>
        <h1>Name: Zen</h1>
        <h1>Gold: {player?.gold}</h1>
        <h1>Level: {player?.level}</h1>
      </MainLayoutComponent>
    </div>
  )
}

export default Character
