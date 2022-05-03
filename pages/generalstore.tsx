import DailyRotations from '../components/DailyRotations'
import MainLayoutComponent from '../components/MainLayoutComponent'

import type { NextPage } from 'next'
const GeneralStore: NextPage = () => {
  return (
    <div>
      <MainLayoutComponent
        navigationLinks={['Daily Rotations', 'Essentials', 'Sell']}
        img="/assets/goblin-placeholder.png"
      >
        <DailyRotations />
      </MainLayoutComponent>
    </div>
  )
}

export default GeneralStore
