import { useEffect, useState } from 'react'

import { getZones } from '../firebase'
import { DefaultListModel } from '../models/DefaultList.interface'
import styles from '../styles/Layout.module.css'

import type { NextPage } from "next"
const Explore: NextPage = () => {
  const [zones, setZones] = useState<DefaultListModel | null>(null)

  useEffect(() => {
    getZones().then((data) => setZones(data))
  }, [])

  return (
    <div className={styles.container}>
      <h1>Explore</h1>
      {zones &&
        zones.zones.map((zone, i) => {
          return <div key={i}>{zone.name}</div>
        })}
    </div>
  )
}

export default Explore
