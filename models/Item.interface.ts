export interface StatsModel {
  armor?: number
  power?: number
  healthRegen?: number
  exploreSpeed?: number
}

export interface ItemModel {
  itemName: string
  itemType: string
  itemStats: StatsModel
  itemUrl: string
  itemDescrioption?: string
  itemQuality: 'junk' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  armorType?:
    | 'head'
    | 'shoulder'
    | 'chest'
    | 'pants'
    | 'glove'
    | 'cloak'
    | 'bracer'
    | 'boot'
    | 'belt'
    | 'trinket'
}
