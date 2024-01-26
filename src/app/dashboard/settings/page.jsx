"use client"

import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import DashboardLayout from '@/components/Layouts/DashboardLayout'


function page() {
  return (
   <DashboardLayout>
     <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Customers"/>
        <DataTable columns={columns} data={data} />
    </div>
   </DashboardLayout>
  )
}

export default page



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
  {
    accessorKey: "category",
    header: "Category",
   
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  
]


  
  export const data = [
    {
      category: "Account",
      value: true,
  
    },
    {
      category: "Notifications",
      value: false,
  
    },
    {
      category: "Language",
      value: "English",
  
    },

    {
      category: "Theme",
      value: "Dark",
  
    },
  ]
  