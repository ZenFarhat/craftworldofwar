import mainLayoutComponentStyles from '../styles/MainLayoutComponent.module.css'

interface MainLayoutComponentProps {
  children: React.ReactNode
  navigationLinks?: string[]
  img?: string
}

const MainLayoutComponent = ({
  children,
  navigationLinks,
  img
}: MainLayoutComponentProps) => {
  return (
    <div className={mainLayoutComponentStyles.mainlayout__container}>
      <div className={mainLayoutComponentStyles.mainlayout__sidebar}>
        <div
          className={mainLayoutComponentStyles.mainlayout__img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {navigationLinks?.map((item, i) => {
          return (
            <p
              className={mainLayoutComponentStyles.mainlayout__sidebartext}
              key={i}
            >
              {item}
            </p>
          )
        })}
      </div>
      <div className={mainLayoutComponentStyles.mainlayout__contentcontainer}>
        <div
          className={mainLayoutComponentStyles.mainlayout__contentsubcontainer}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayoutComponent
