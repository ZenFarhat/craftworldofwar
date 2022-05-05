import DailyRotations from '../components/DailyRotations'
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
          }
        ]}
        img="/assets/goblin-placeholder.png"
        defaultTab={<DailyRotations />}
      />
    </div>
  )
}

export default GeneralStore
