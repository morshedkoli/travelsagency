import React from 'react'
import SideNavbar from '../SideNavbar'
import { cn } from '@/lib/utils'
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

function DashboardLayout({children}) {
  
  return (
    <div
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <SideNavbar />
        <div className="p-8 w-full">
          {children}
        </div>
      </div>
  )
}

export default DashboardLayout