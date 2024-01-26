import Login from '@/components/Login'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

function page() {

  const tokenList = cookies();
  const token = tokenList.has("token");
  if (token) {
    redirect('/dashboard');
  }
  return (
    <div className='w-full'>
        <Login/>
    </div>
  )
}

export default page