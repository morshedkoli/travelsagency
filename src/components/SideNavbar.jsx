"use client"
import React, { useState } from 'react'
import { Nav } from '@/components/ui/nav'
import {
    AlertCircle,
    Archive,
    ArchiveX,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    MessagesSquare,
    PenBox,
    Search,
    Send,
    Settings,
    ShoppingCart,
    Trash2,
    UserRound,
    Users2,
    UsersRound,
  } from "lucide-react"
import { Button } from '@/components/ui/button'
import { useWindowWidth,  } from '@react-hook/window-size'




function SideNavbar() {

const [isCollapsed, setIsCollapsed] = useState(false)

const onlyWidth = useWindowWidth();
const mobileWidth = onlyWidth < 768;

function toggleSidebar(){
  setIsCollapsed(!isCollapsed)
}


  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'> 
{
  !mobileWidth && (
    <div className='absolute right-[-20px] top-7'>
        <Button
        onClick={toggleSidebar}
        variant="secondary" className="rounded-full p-2" >
              <ChevronRight/>
        </Button>
</div>
  )
}
      <Nav
    isCollapsed={mobileWidth? true: isCollapsed}
    links={[
      {
        title: "Dashboard",
        href:"/",
        icon: LayoutDashboard,
        variant: "default",
      },
      {
        title: "Customers",
        href:"/customers",
        icon: UsersRound,
        variant: "ghost",
      },
      {
        title: "Requests",
        href:"/requests",
        icon: ShoppingCart,
        variant: "ghost",
      },
      {
        title: "Settings",
        href:"/settings",
        icon: Settings,
        variant: "ghost",
      },
     
    ]}
  /></div>
  )
}

export default SideNavbar