import Head from 'next/head'
import { useEffect, useState } from 'react'

import styles from '../styles/Layout.module.css'

import type { NextPage } from "next"
const GeneralStore: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>GeneralStore</h1>
    </div>
  )
}

export default GeneralStore
