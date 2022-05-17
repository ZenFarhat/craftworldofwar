import React from 'react'
import characterEquipmentStyles from '../styles/CharacterEquipment.module.css'

const CharacterEquipment = () => {
  return (
    <div className={characterEquipmentStyles.characterequipment__grid}>
      <div className={characterEquipmentStyles.characterequipment__head}></div>
      <div
        className={characterEquipmentStyles.characterequipment__shoulder}
      ></div>
      <div className={characterEquipmentStyles.characterequipment__chest}></div>
    </div>
  )
}

export default CharacterEquipment
