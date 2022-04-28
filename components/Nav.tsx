import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'
import NavLinkComponent from './NavLinkComponent'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__menu}>
        <NavLinkComponent label="Auction House" icon="coins.svg" to="auctionhouse" />
        <NavLinkComponent label="Companions" icon="pet.svg" to="companions" />
        <NavLinkComponent label="Mounts" icon="horse.svg" to="mounts" />
        <NavLinkComponent label="Professions" icon="tools.svg" to="professions" />
        <NavLinkComponent label="Explore" icon="explore.svg" to="explore" />
        <NavLinkComponent label="Dungeons" icon="dungeons.svg" to="dungeons" />
        <NavLinkComponent label="Character" icon="character.svg" to="character" />
        <NavLinkComponent label="General Store" icon="generalstore.svg" to="generalstore" />
      </div>
    </nav>
  )
}

export default Nav
