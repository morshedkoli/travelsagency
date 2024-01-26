import UserForm from '@/components/UserForm'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

function page() {

  const tokenList = cookies();
  const token = tokenList.has("token");
  if (token) {
    redirect("/dashboard");
  }
  return (
    <div>
        <UserForm/>
    </div>
  )
}

export default page