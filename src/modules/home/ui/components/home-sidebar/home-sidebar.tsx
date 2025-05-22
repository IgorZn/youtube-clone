import React from 'react'
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import MainSection from '@/modules/home/ui/components/home-sidebar/main-section'

function HomeSidebar(props: object) {
  return (
    <Sidebar className={'z-40 border-none pt-16'}>
      <SidebarContent className={'bg-background'}>
        <MainSection />
      </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar
