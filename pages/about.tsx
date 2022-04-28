import Head from 'next/head'

import styles from '../styles/Layout.module.css'

import type { NextPage } from "next"
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to about</h1>
    </div>
  )
}

export default About
