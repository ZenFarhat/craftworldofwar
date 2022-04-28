import Head from 'next/head'

import styles from '../styles/Layout.module.css'

import type { NextPage } from "next"
const AuctionHouse: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Auction House</h1>
    </div>
  )
}

export default AuctionHouse
