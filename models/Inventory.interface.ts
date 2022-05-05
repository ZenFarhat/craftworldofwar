export interface InventorySlot {
  itemName: string
  itemDescription: string
  icon: string
  itemQuality: 'junk' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  itemLevelRequirement: number
  itemType: string
}
