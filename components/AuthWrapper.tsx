import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAppContext } from '../contexts/AppContext'

interface AuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper = (props: AuthWrapperProps) => {
  const router = useRouter()

  const { auth } = useAppContext()
  const { children } = props

  useEffect(() => {
    if (!auth) {
      router.push("/login")
    }
  }, [auth])

  return <div>{children}</div>
}

export default AuthWrapper
