import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import NavLinkStyles from '../styles/NavLinkComponent.module.css'

interface NavLinkComponentProps {
  label: string
  to: string
  icon: string
}

const NavLinkComponent = (props: NavLinkComponentProps) => {
  const { label, to, icon } = props

  return (
    <div className={NavLinkStyles.navlink__component}>
      <Link href={`/${to}`}>
        <a>
          <Image src={`/assets/${icon}`} alt="menu_icon" height={"32px"} width={"32px"} className={NavLinkStyles.navlink__img} objectFit="contain" />
          {label}
        </a>
      </Link>
    </div>
  )
}

export default NavLinkComponent
