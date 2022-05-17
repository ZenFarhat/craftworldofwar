import { useEffect, useState } from 'react'

import ExploreListComponent from '../components/ExploreListComponent'
import { DefaultListModel } from '../models/DefaultList.interface'
import exploreStyles from '../styles/Explore.module.css'

import type { NextPage } from 'next'
const Explore: NextPage = () => {
  return (
    <div className={exploreStyles.explore__container}>
      <h1>Explore</h1>
    </div>
  )
}

export default Explore
