import { useEffect, useState } from 'react'

import ExploreListComponent from '../components/ExploreListComponent'
import { getZones } from '../firebase'
import { DefaultListModel } from '../models/DefaultList.interface'
import exploreStyles from '../styles/Explore.module.css'

import type { NextPage } from 'next'
const Explore: NextPage = () => {
  const [zones, setZones] = useState<DefaultListModel | null>(null)

  useEffect(() => {
    getZones().then((data) => setZones(data))
  }, [])

  return (
    <div className={exploreStyles.explore__container}>
      <div className={exploreStyles.explore__sidebar}>
        {zones &&
          zones.zones.map((zone, i) => {
            return <ExploreListComponent zoneName={zone.name} key={i} />
          })}
      </div>
      <div className={exploreStyles.explore__map}></div>
    </div>
  )
}

export default Explore
