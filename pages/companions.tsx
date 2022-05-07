import MainLayoutComponent from '../components/MainLayoutComponent'
import MountsCompanionsAlmanac from '../components/MountsCompanionsAlmanac'
import MountsCompanionsCollection from '../components/MountsCompanionsCollection'

import type { NextPage } from 'next'
const Companions: NextPage = () => {
  return (
    <div>
      <div>
        <MainLayoutComponent
          defaultTab={<MountsCompanionsCollection />}
          navigationLinks={[
            { text: 'Companions', tab: <MountsCompanionsCollection /> },
            { text: 'Almanac', tab: <MountsCompanionsAlmanac /> }
          ]}
        />
      </div>
    </div>
  )
}

export default Companions
