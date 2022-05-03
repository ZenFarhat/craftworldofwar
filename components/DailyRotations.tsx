import dailyRotationStyles from '../styles/DailyRotations.module.css'

const DailyRotations = () => {
  return (
    <div>
      <div className={dailyRotationStyles.dailyrotation__icons}>
        <div className={dailyRotationStyles.dailyrotation__iconsub}>
          <div className={dailyRotationStyles.dailyrotation__circle}></div>
        </div>
        <div className={dailyRotationStyles.dailyrotation__iconmain}>
          <div className={dailyRotationStyles.dailyrotation__circle}></div>
        </div>
        <div className={dailyRotationStyles.dailyrotation__iconsub}>
          <div className={dailyRotationStyles.dailyrotation__circle}></div>
        </div>
      </div>
      <div className={dailyRotationStyles.dailyrotation__iteminfo}>
        <div className={dailyRotationStyles.dailyrotation__iteminfoheader}>
          <div
            className={dailyRotationStyles.dailyrotation__iteminfoheadertext}
          >
            <p>Legendary Sword Of Legend</p>
            <p>Gold: 1000g</p>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <button className={dailyRotationStyles.dailyrotation__buybtn}>
          Buy
        </button>
      </div>
    </div>
  )
}

export default DailyRotations
