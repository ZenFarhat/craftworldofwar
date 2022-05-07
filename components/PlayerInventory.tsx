import { useEffect, useState } from 'react'

import { useAppContext } from '../contexts/AppContext'
import { openInventorySubject$ } from '../rxjs'
import playerInventoryStyles from '../styles/PlayerInventory.module.css'
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
          <button
            onClick={() => {
              setOpen(false)
            }}
          >
            Close Me
          </button>
        </div>
      )}
    </>
  )
}
