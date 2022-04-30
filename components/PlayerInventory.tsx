import { useEffect, useState } from 'react'

import { openInventorySubject$ } from '../rxjs'
import playerInventoryStyles from '../styles/PlayerInventory.module.css'

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
          PlayerInventory
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
