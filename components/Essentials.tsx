import { InventorySlot } from '../models/Inventory.interface'
import essentialsStyles from '../styles/Essentials.module.css'

interface ShopGridItems {
  filled?: boolean
  item?: InventorySlot
}

const Essentials = () => {
  const items: ShopGridItems[] = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ]

  return (
    <div className={essentialsStyles.essentials__container}>
      <div className={essentialsStyles.essentials__subcontainer}>
        <div className={essentialsStyles.essentials__inventory}>
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={essentialsStyles.essentials__inventoryslot}
              ></div>
            )
          })}
        </div>
        <div className={essentialsStyles.essentials__showcase}>
          <div className={essentialsStyles.essentials__showcaseimg}></div>
          <div className={essentialsStyles.essentials__showcasetext}>
            <h3 className={essentialsStyles.essentials__showcasetextheader}>
              Legendary Sword Of Legend
            </h3>
          </div>
        </div>
      </div>
      <div className={essentialsStyles.essentials__buttoncontainer}>
        <button className={essentialsStyles.essentials__buybtn}>Buy</button>
      </div>
    </div>
  )
}

export default Essentials
