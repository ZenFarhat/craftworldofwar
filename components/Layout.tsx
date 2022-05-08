import { motion } from 'framer-motion'
import React, { ReactHTMLElement, useRef } from 'react'

import { openInventorySubject$ } from '../rxjs'
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
    <motion.div
      className={layoutStyles.layout__maincontainer}
      ref={constraintsRef}
    >
      <Meta />
      <Nav />
      <div className={layoutStyles.layout__subcontainer}>{children}</div>
      <BottomMenu />
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={layoutStyles.layout__inventory}
        dragMomentum={false}
        onViewportLeave={() => {
          openInventorySubject$.next(false)
        }}
      >
        <PlayerInventory />
      </motion.div>
    </motion.div>
  )
}
