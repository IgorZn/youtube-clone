'use client'

import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

const items = [
  { title: 'History', url: '/playlist/history', icon: HistoryIcon, auth: true },
  { title: 'Liked Videos', url: '/playlist/liked', icon: ThumbsUpIcon, auth: true },
  { title: 'All playlists', url: '/playlist', icon: ListVideoIcon, auth: true },
]

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: change to look at current path
                onClick={() => {}} //TODO: do something
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

export default PersonalSection
