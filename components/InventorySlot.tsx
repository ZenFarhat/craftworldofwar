import inventorySlotStyles from '../styles/InventorySlot.module.css'

interface InventorySlotProps {
  itemName: string
  itemDescription: string
  icon: string
  itemQuality: 'junk' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  itemLevelRequirement: number
}

const InventorySlot = (props: InventorySlotProps) => {
  const { itemName, itemDescription, icon, itemQuality, itemLevelRequirement } =
    props

  const generateTextStyle = () => {
    switch (itemQuality) {
      case 'junk':
        return 'gray'
      case 'common':
        return 'white'
      case 'uncommon':
        return 'green'
      case 'rare':
        return 'blue'
      case 'epic':
        return 'purple'
      case 'legendary':
        return 'orange'
      default:
        break
    }
  }

  return (
    <div className={inventorySlotStyles.inventoryslot__container}>
      <div
        className={inventorySlotStyles.inventoryslot__slot}
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className={inventorySlotStyles.inventoryslot__hover}>
        <p style={{ color: generateTextStyle() }}>{itemName}</p>
        <p>Level Required: {itemLevelRequirement}</p>
        <p>{itemDescription}</p>
      </div>
    </div>
  )
}

export default InventorySlot
