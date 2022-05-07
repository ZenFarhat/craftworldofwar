import { useAppContext } from '../contexts/AppContext'
import { openInventorySubject$ } from '../rxjs'
import bottomMenuStyles from '../styles/BottomMenu.module.css'

const BottomMenu = () => {
  const { auth } = useAppContext()

  return (
    <>
      {auth && (
        <div className={bottomMenuStyles.bottom__menu}>
          <div
            className={bottomMenuStyles.bottom__menuicon}
            onClick={() => {
              openInventorySubject$.next(true)
            }}
          ></div>
        </div>
      )}
    </>
  )
}

export default BottomMenu
