import DashboardLayout from '@/components/Layouts/DashboardLayout'
import PageTitle from '@/components/PageTitle'
import UserList from '@/components/UserList'
// import getAllCustomers from '@/lib/getAllCustomers'
import React from 'react'

 
async function page() {


  return (
    <DashboardLayout>
    <PageTitle title="Customers" />

    <UserList/>

  </DashboardLayout>
  )
}

export default page