import DailyRotations from '../components/DailyRotations'
import Essentials from '../components/Essentials'
import MainLayoutComponent from '../components/MainLayoutComponent'
import { mainLayoutSubject$ } from '../rxjs'

import type { NextPage } from 'next'
const GeneralStore: NextPage = () => {
  return (
    <div>
      <MainLayoutComponent
        navigationLinks={[
          {
            text: 'Daily Rotations',
            onClick: () => {
              mainLayoutSubject$.next(<DailyRotations />)
            }
          },
          {
            text: 'Essentials',
            onClick: () => {
              mainLayoutSubject$.next(<Essentials />)
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
