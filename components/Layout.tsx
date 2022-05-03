import React from 'react'

import layoutStyles from '../styles/Layout.module.css'
import BottomMenu from './BottomMenu'
import Meta from './Meta'
import Nav from './Nav'
import { PlayerInventory } from './PlayerInventory'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <div className={layoutStyles.layout__maincontainer}>
      <Meta />
      <Nav />
      <div className={layoutStyles.layout__subcontainer}>{children}</div>
      <BottomMenu />
      <PlayerInventory />
    </div>
  )
}
