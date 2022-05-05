import MainLayoutComponent from '../components/MainLayoutComponent'
import { useAppContext } from '../contexts/AppContext'

import type { NextPage } from 'next'
const Character: NextPage = () => {
  const { player } = useAppContext()

  return <div></div>
}

export default Character
