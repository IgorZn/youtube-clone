'use client'

import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { useAuth, useClerk } from '@clerk/clerk-react'

const items = [
  { title: 'Home', url: '/', icon: HomeIcon },
  { title: 'Subscriptions', url: '/feed/subscriptions', icon: PlaySquareIcon, auth: true },
  { title: 'Trending', url: '/feed/trending', icon: FlameIcon },
]

export const MainSection = () => {
  const { isSignedIn } = useAuth()
  const clerk = useClerk()
  console.log('isSignedIn', !isSignedIn)
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: change to look at current path
                onClick={e => {
                  e.preventDefault()
                  if (!isSignedIn && item.auth) {
                    return clerk.openSignIn()
                  }
                }}
              />
              <Link href={item.url} className='flex items-center gap-4'>
                <item.icon />
                <span className={'text-sm'}>{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default MainSection
