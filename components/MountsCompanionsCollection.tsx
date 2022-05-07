import React from 'react'

import collectionStyles from '../styles/MountsCompanionsCollection.module.css'

const MountsCompanionsCollection = () => {
  return (
    <div className={collectionStyles.collection__container}>
      <div className={collectionStyles.collection__card}></div>
      <div className={collectionStyles.collection__inventory}></div>
    </div>
  )
}

export default MountsCompanionsCollection
