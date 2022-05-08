import { useEffect, useRef, useState } from 'react'

import { useAppContext } from '../contexts/AppContext'
import { armorItems } from '../data'
import { openInventorySubject$ } from '../rxjs'
import playerInventoryStyles from '../styles/PlayerInventory.module.css'
import BasicButton from './BasicButton'
import InventorySlot from './InventorySlot'

export const PlayerInventory = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')

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
            {armorItems
              .filter(
                (item) =>
                  item.itemName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.itemType
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.itemQuality
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .map((item, i) => (
                <InventorySlot
                  icon={item.itemUrl}
                  itemName={item.itemName}
                  itemQuality={item.itemQuality}
                  itemLevelRequirement={30}
                  itemDescription={item.itemDescrioption}
                  itemType={item.itemType}
                  key={i}
                />
              ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className={playerInventoryStyles.playerinventory__searchbar}
              onChange={(e) => {
                setSearchQuery(e.target.value)
              }}
            />
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
