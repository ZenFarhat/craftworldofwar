import React, { useRef } from 'react'

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

  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <div className={layoutStyles.layout__maincontainer} ref={constraintsRef}>
      <Meta />
      <Nav />
      <div className={layoutStyles.layout__subcontainer}>{children}</div>
      <BottomMenu />
      <PlayerInventory />
    </div>
  )
}
