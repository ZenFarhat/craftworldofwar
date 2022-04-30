import { openInventorySubject$ } from '../rxjs'
import bottomMenuStyles from '../styles/BottomMenu.module.css'

const BottomMenu = () => {
  return (
    <div className={bottomMenuStyles.bottom__menu}>
      <div
        className={bottomMenuStyles.bottom__menuicon}
        onClick={() => {
          openInventorySubject$.next(true)
        }}
      >
        B
      </div>
    </div>
  )
}

export default BottomMenu
