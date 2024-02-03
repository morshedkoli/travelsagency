import DashboardLayout from '@/components/Layouts/DashboardLayout'
import PageTitle from '@/components/PageTitle'
import ServiceNameForm from '@/components/ServiceNameForm'
import React from 'react'

function page() {
  return (
    <DashboardLayout>
      <PageTitle title="New Service Add" />

    <ServiceNameForm/>

    </DashboardLayout>
  )
}

export default page