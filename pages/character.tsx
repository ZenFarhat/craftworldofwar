import CharacterAchievements from '../components/CharacterAchievements'
import CharacterEquipment from '../components/CharacterEquipment'
import CharacterTalents from '../components/CharacterTalents'
import MainLayoutComponent from '../components/MainLayoutComponent'
import { useAppContext } from '../contexts/AppContext'

import type { NextPage } from 'next'
const Character: NextPage = () => {
  const { player } = useAppContext()

  return (
    <MainLayoutComponent
      defaultTab={<CharacterEquipment />}
      navigationLinks={[
        { text: 'Equipment', tab: <CharacterEquipment /> },
        { text: 'Talents', tab: <CharacterTalents /> },
        { text: 'Achievements', tab: <CharacterAchievements /> }
      ]}
    ></MainLayoutComponent>
  )
}

export default Character
