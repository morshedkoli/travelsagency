"use client"

import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'


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
    cell:({row})=>{
      return(
        <div className='flex gap-2 items-center'>
          <img
          className='h-10 w-10'
          src='https://api.dicebear.com/7.x/lorelei/svg?seed=Smokey'
          alt='user'
          />
          <p>{row.getValue("name")}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "pendingrequest",
    header: "Pending Request",
  },
  {
    accessorKey: "payable",
    header: "Payable Amount",
  },
]


  
  export const data = [
    {
      id: "728ed52f",
      name: "Murshed Al Main",
      phone: "01781981486",
      pendingrequest: 4,
      payable:200
    },
    {
      id: "489e1d42",
      name: "Murshed Al Main",
      phone: "01781981486",
      pendingrequest: 4,
      payable:200
    },
    // ...
  ]
  