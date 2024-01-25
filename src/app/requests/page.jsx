"use client"

import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'


function page() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Customers"/>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default page



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
  {
    accessorKey: "name",
    header: "Name",
   
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "serviceName",
    header: "Service",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
        return(
          <div className={cn("font-medium w-fit px-4 py-2 rounded-lg",{
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}>
           
            <p>{row.getValue("status")}</p>
          </div>
        )
      }
  },
  
  {
    accessorKey: "paidAmount",
    header: "Paid Amount",
  },
  
  {
    accessorKey: "douAmount",
    header: "Due Amount",
  },
]


  
  export const data = [
    {
      id: "728ed52f",
      name: "Murshed Al Main",
      phone: "01781981486",
      serviceName: "Passport Correction",
      status:"Pending",
      paidAmount:500,
      douAmount: 5000
    },
    {
        id: "728ed52f",
        name: "Murshed Al Main",
        phone: "01781981486",
        serviceName: "Passport Correction",
        status:"Completed",
        paidAmount:500,
        douAmount: 5000
      },

      {
        id: "728ed52f",
        name: "Murshed Al Main",
        phone: "01781981486",
        serviceName: "Passport Correction",
        status:"Processing",
        paidAmount:500,
        douAmount: 5000
      },


      {
        id: "728ed52f",
        name: "Murshed Al Main",
        phone: "01781981486",
        serviceName: "Passport Correction",
        status:"Pending",
        paidAmount:500,
        douAmount: 5000
      },
  ]
  