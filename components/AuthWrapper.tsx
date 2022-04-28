import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAppContext } from '../contexts/AppContext'

interface AuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper = (props: AuthWrapperProps) => {
  const { auth } = useAppContext()
  const { children } = props

  return auth ? <div>{children}</div> : <></>
}

export default AuthWrapper
