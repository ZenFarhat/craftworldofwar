import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppContext } from '../contexts/AppContext'
import { auth } from '../firebase'
import styles from '../styles/Layout.module.css'

import type { NextPage } from "next"
const Login: NextPage = () => {
  const appContext = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (appContext.auth) {
      router.push("/auctionhouse")
    }
  }, [])

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, "zeinfarhat6@gmail.com", "abcd1234")
      .then(() => {
        router.push("/auctionhouse")
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className={styles.container}>
      <input type="email" value="zeinfarhat6@gmail.com" disabled />
      <input type="password" value="abcd1234" disabled />
      <button onClick={handleSignIn}>Log In</button>
    </div>
  )
}

export default Login
