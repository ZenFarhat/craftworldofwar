import MainLayoutComponent from '../components/MainLayoutComponent'
import MountsCompanionsAlmanac from '../components/MountsCompanionsAlmanac'
import MountsCompanionsCollection from '../components/MountsCompanionsCollection'

import type { NextPage } from 'next'
const Mounts: NextPage = () => {
  return (
    <div>
      <MainLayoutComponent
        defaultTab={<MountsCompanionsCollection />}
        navigationLinks={[
          { text: 'Mounts', tab: <MountsCompanionsCollection /> },
          { text: 'Almanac', tab: <MountsCompanionsAlmanac /> }
        ]}
      />
    </div>
  )
}

export default Mounts
