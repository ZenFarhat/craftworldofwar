import bottomMenuStyles from '../styles/BottomMenu.module.css'

const BottomMenu = () => {
  return (
    <div className={bottomMenuStyles.bottom__menu}>
      <div className={bottomMenuStyles.bottom__menuicon}>B</div>
      <button className="Bag">Bag</button>
    </div>
  )
}

export default BottomMenu
