import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAppContext } from '../contexts/AppContext'

interface RedirectWrapperProps {
  children: React.ReactNode
}

const RedirectWrapper = (props: RedirectWrapperProps) => {
  const { children } = props
  const { auth } = useAppContext()
  const protectedRoutes: string[] = ["/generalstore", "/auctionhouse", "/companions", "/professions", "/explore", "/dungeons", "/character", "/mounts"]
  const router = useRouter()

  useEffect(() => {
    console.log(router.pathname)
    if (protectedRoutes.includes(router.pathname) && !auth) {
      router.push("/login")
    } else {
      return
    }
  }, [])

  return <div>{children}</div>
}

export default RedirectWrapper
