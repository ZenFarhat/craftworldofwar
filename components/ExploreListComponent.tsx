import exploreListComponentStyles from '../styles/ExploreListComponent.module.css'

interface ExploreListComponentProps {
  zoneName: string
}

const ExploreListComponent = (props: ExploreListComponentProps) => {
  const { zoneName } = props

  return (
    <div className={exploreListComponentStyles.explorelist__component}>
      {zoneName}
    </div>
  )
}

export default ExploreListComponent
