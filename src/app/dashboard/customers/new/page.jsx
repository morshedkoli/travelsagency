import CustomerForm from '@/components/CustomerForm'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import PageTitle from '@/components/PageTitle'
import React from 'react'

function page() {
  return (
    <DashboardLayout>
      <PageTitle title="New Customer Add" />
      <CustomerForm/>
    </DashboardLayout>
  )
}

export default page