import DailyRotations from '../components/DailyRotations'
import Essentials from '../components/Essentials'
import MainLayoutComponent from '../components/MainLayoutComponent'
import Sell from '../components/Sell'
import { mainLayoutSubject$ } from '../rxjs'

import type { NextPage } from 'next'
const GeneralStore: NextPage = () => {
  return (
    <div>
      <MainLayoutComponent
        navigationLinks={[
          {
            text: 'Daily Rotation',
            onClick: () => {
              mainLayoutSubject$.next(<DailyRotations />)
            }
          },
          {
            text: 'Essentials',
            onClick: () => {
              mainLayoutSubject$.next(<Essentials />)
            }
          },
          {
            text: 'Sell',
            onClick: () => {
              mainLayoutSubject$.next(<Sell />)
            }
          }
        ]}
        defaultTab={<DailyRotations />}
        img="/assets/goblin-placeholder.png"
      />
    </div>
  )
}

export default GeneralStore
