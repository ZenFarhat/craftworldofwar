import React from 'react'

import layoutStyles from '../styles/Layout.module.css'
import BottomMenu from './BottomMenu'
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
      <Nav />
      {children}
      <BottomMenu />
    </div>
  )
}
