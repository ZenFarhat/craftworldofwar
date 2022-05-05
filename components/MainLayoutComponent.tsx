import React, { useEffect, useState } from 'react'

import { mainLayoutSubject$ } from '../rxjs'
import mainLayoutComponentStyles from '../styles/MainLayoutComponent.module.css'

interface navigationLink {
  text: string
  onClick: () => void
}

interface MainLayoutComponentProps {
  navigationLinks: navigationLink[]
  img?: string
  defaultTab: React.ReactNode
}

const MainLayoutComponent = (props: MainLayoutComponentProps) => {
  const { navigationLinks, img, defaultTab } = props

  const [layout, setLayout] = useState<React.ReactNode>()
  const [tab, setTab] = useState<string>(navigationLinks[0].text)

  useEffect(() => {
    const mainLayoutSub = mainLayoutSubject$.subscribe({
      next: (value) => {
        setLayout(value)
      }
    })

    return () => mainLayoutSub.unsubscribe()
  }, [])

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
              key={i}
              className={
                mainLayoutComponentStyles.mainlayout__sidebartext +
                (tab === item.text
                  ? ` ${mainLayoutComponentStyles.mainlayout__sidebartextactive}`
                  : '')
              }
              onClick={() => {
                setTab(item.text)
                item.onClick
              }}
            >
              {item.text}
            </p>
          )
        })}
      </div>
      <div className={mainLayoutComponentStyles.mainlayout__contentcontainer}>
        <div
          className={mainLayoutComponentStyles.mainlayout__contentsubcontainer}
        >
          {layout || defaultTab}
        </div>
      </div>
    </div>
  )
}

export default MainLayoutComponent
