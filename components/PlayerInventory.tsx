import { useEffect, useRef, useState } from 'react'

import { useAppContext } from '../contexts/AppContext'
import { openInventorySubject$ } from '../rxjs'
import playerInventoryStyles from '../styles/PlayerInventory.module.css'
import BasicButton from './BasicButton'
import InventorySlot from './InventorySlot'

export const PlayerInventory = () => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const playerInventorySub = openInventorySubject$.subscribe({
      next: (value) => {
        if (value) {
          setOpen(value)
        }
      }
    })

    return () => playerInventorySub.unsubscribe()
  }, [])

  return (
    <>
      {open && (
        <div className={playerInventoryStyles.playerinventory}>
          <div className={playerInventoryStyles.playerinventory__slots}>
            <InventorySlot
              icon="/assets/sword-placeholder.png"
              itemName="Legendary Sword Of Epic"
              itemQuality="legendary"
              itemLevelRequirement={30}
              itemDescription="Abdallah love this sword man bro man"
              itemType="Weapon"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className={playerInventoryStyles.playerinventory__searchbar}
            />
            <div className={playerInventoryStyles.playerinventory__filters}>
              <div className={playerInventoryStyles.playerinventory__filter}>
                <input type="radio" value="weapon" name="filter" />{' '}
                <span>Weapon</span>
              </div>
              <div className={playerInventoryStyles.playerinventory__filter}>
                <input type="radio" value="armor" name="filter" />{' '}
                <span>Armor</span>
              </div>
              <div className={playerInventoryStyles.playerinventory__filter}>
                <input type="radio" value="trinkets" name="filter" />{' '}
                <span>Trinkets</span>
              </div>
              <div className={playerInventoryStyles.playerinventory__filter}>
                <input type="radio" value="reagents" name="filter" />{' '}
                <span>Reagents</span>
              </div>
            </div>
          </div>
          <div>
            <BasicButton
              label="close"
              onClick={() => {
                setOpen(false)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
