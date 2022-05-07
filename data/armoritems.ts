import { ItemModel } from '../models/Item.interface'

export const armorItems: ItemModel[] = [
  {
    itemName: 'Leather Belt',
    itemQuality: 'common',
    itemType: 'Armor',
    itemDescrioption: 'A common leather belt',
    itemStats: {
      armor: 5,
      power: 0,
      healthRegen: 0,
      exploreSpeed: 0
    },
    itemUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftworldofwar.appspot.com/o/armour-icons%2Fbelt1.png?alt=media&token=1ffb1294-3fad-43fa-8e22-9e75f1bb8286',
    armorType: 'belt'
  },
  {
    itemName: "Explorer's forgotten shoes",
    itemQuality: 'common',
    itemType: 'Armor',
    itemDescrioption: "A bald warrior's lost forgotten shoes",
    itemStats: {
      armor: 5,
      power: 0,
      healthRegen: 0,
      exploreSpeed: 0
    },
    itemUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftworldofwar.appspot.com/o/armour-icons%2Fboot1.png?alt=media&token=08d451b3-61d7-4f3c-96bd-3cc72e33bdee',
    armorType: 'boot'
  },
  {
    itemName: 'Copper bracers',
    itemQuality: 'common',
    itemType: 'Armor',
    itemDescrioption: 'Made of copper',
    itemStats: {
      armor: 5,
      power: 0,
      healthRegen: 0,
      exploreSpeed: 0
    },
    itemUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftworldofwar.appspot.com/o/armour-icons%2Fboot1.png?alt=media&token=08d451b3-61d7-4f3c-96bd-3cc72e33bdee',
    armorType: 'bracer'
  },
  {
    itemName: 'Common leather chestpiece',
    itemQuality: 'common',
    itemType: 'Armor',
    itemDescrioption: 'Smells like someone else has worn this',
    itemStats: {
      armor: 5,
      power: 0,
      healthRegen: 0,
      exploreSpeed: 0
    },
    itemUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftworldofwar.appspot.com/o/armour-icons%2Fchest1.png?alt=media&token=2ee6a2ed-422b-4478-bb4f-63f7199b5c79',
    armorType: 'chest'
  }
]
