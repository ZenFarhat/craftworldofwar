import React from 'react'

import layoutStyles from '../styles/Layout.module.css'
import AuthWrapper from './AuthWrapper'
import Meta from './Meta'
import Nav from './Nav'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <div className={layoutStyles.container}>
      <Meta />
      <AuthWrapper>
        <Nav />
      </AuthWrapper>
      {children}
    </div>
  )
}
