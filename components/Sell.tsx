import { InventorySlot } from '../models/Inventory.interface'
import sellStyles from '../styles/Sell.module.css'

interface SellGridItems {
  filled?: boolean
  item?: InventorySlot
}

const Sell = () => {
  const items: SellGridItems[] = [
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
    <div className={sellStyles.sell__container}>
      <div className={sellStyles.sell__subcontainer}>
        <div className={sellStyles.sell__inventory}>
          {items.map((item, i) => {
            return (
              <div key={i} className={sellStyles.sell__inventoryslot}></div>
            )
          })}
        </div>
        <div className={sellStyles.sell__showcase}>
          <div className={sellStyles.sell__showcaseimg}></div>
          <div className={sellStyles.sell__showcasetext}>
            <h3 className={sellStyles.sell__showcasetextheader}>
              Legendary Sword Of Legend
            </h3>
          </div>
        </div>
      </div>
      <div className={sellStyles.sell__buttoncontainer}>
        <button className={sellStyles.sell__sellbtn}>Sell</button>
      </div>
    </div>
  )
}

export default Sell
