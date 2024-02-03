"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Link from 'next/link';
import swal from 'sweetalert';
import { DNA } from 'react-loader-spinner';

function Login() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});


  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }


  const onLogin =async(e)=>{

    e.preventDefault()
    setIsButtonDisabled(true);
  setIsLoading(true)

    const res = await  fetch("/api/user/login",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
     })

     const data= await res.json()
    if(data.status==="success"){
      swal("Welcome Agency!", `you Are Successfully loged In`, "success");
      window.location.href="/dashboard"
    }else{
      swal(`Login Fail `, ` There is a problem, check and login again `, "info");
      setIsLoading(false)

    }

  }


  return (
   
    <div className='bg-[#16202a] text-white h-screen w-full flex items-center justify-center flex-col '>
    <div className='my-4'>
      <h1 className='text-3xl font-semibold'>Login</h1>
      <p className='mt-2 text-xs text-slate-400'>
       
        Go With Your Business Next Level</p>
    </div>
    
    <form onSubmit={onLogin}>
    
    
    <Label htmlFor="username" > Email*</Label>
    <Input className="mt-2 mb-4 bg-transparent rounded-full"
     type="text" id="email" placeholder="email"
     onChange={handleInputChange}
              name='email'
     />
    
    <Label htmlFor="password" > Password*</Label>
    <Input className="mt-2 mb-4 bg-transparent rounded-full"
     type="text" id="password" placeholder="Password"
     onChange={handleInputChange}
               name='password'
     />
    
    <Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700"  disabled={isLoading? true: false} >
  {isLoading? <span><DNA
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  
/>

</span> :"Login"}
  </Button>
    
    
    </form>
    
    <p className='mt-6 text-slate-500' 
    >Dont Have an Account? <Link href="/user/signup">Register</Link> Here.</p>
    
    </div>
  
  )
}

export default Login