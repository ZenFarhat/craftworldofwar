import { useAppContext } from '../contexts/AppContext'
import { auth } from '../firebase'
import { openInventorySubject$ } from '../rxjs'
import navStyles from '../styles/Nav.module.css'
import NavLinkComponent from './NavLinkComponent'

const Nav = () => {
  const appContext = useAppContext()

  const handleSignOut = () => {
    auth.signOut()
    openInventorySubject$.next(false)
  }

  if (!appContext.auth) return null

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__menu}>
        <NavLinkComponent
          label="Auction House"
          icon="coins.svg"
          to="auctionhouse"
        />
        <NavLinkComponent label="Companions" icon="pet.svg" to="companions" />
        <NavLinkComponent label="Mounts" icon="horse.svg" to="mounts" />
        <NavLinkComponent
          label="Professions"
          icon="tools.svg"
          to="professions"
        />
        <NavLinkComponent label="Explore" icon="explore.svg" to="explore" />
        <NavLinkComponent label="Dungeons" icon="dungeons.svg" to="dungeons" />
        <NavLinkComponent
          label="Character"
          icon="character.svg"
          to="character"
        />
        <NavLinkComponent
          label="General Store"
          icon="generalstore.svg"
          to="generalstore"
        />
        <button onClick={handleSignOut}>Log Out</button>
      </div>
    </nav>
  )
}

export default Nav
