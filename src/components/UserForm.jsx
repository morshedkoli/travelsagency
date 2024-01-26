"use client"

import React from 'react'
import  { useState } from 'react'
import swal from 'sweetalert';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

function UserForm() {


    const [userdata, setUserData] = useState({})

  
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setUserData({
        ...userdata,
        [name]: value,
      });
    }

    async function submitForm(e){

      e.preventDefault()

      const NewUser =  {
        name:userdata.name ,
        email: userdata.email,
        password:userdata.password,

      }

     const res = await fetch("/api/user/signup",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NewUser),
     })

     const data= await res.json()

     console.log("response", data)

     if(data.status==="success"){
      swal("Welcome To Agency!", `${data.data["name"]} Are Successfully Created as Customer`, "success");
     }
    
     else if(data.status==="emailexist"){
      swal( `${userdata.email} `,`Email Address are already exist in our system `, "info");
     }
     
     else{
      swal("Ohh!", `${data.data.e} Are Successfully Not Created as Customer`, "error");
     }

     
    }


  return (
    <div className='grid w-full h-full  bg-white '>
      
<div className='bg-[#16202a] min-h-screen text-white flex items-center justify-center  flex-col '>
  
<div className='my-4'>
  <h1 className='text-3xl font-semibold'>Registration</h1>
  <p className='mt-2 text-xs text-slate-400'>
    {' '}
    Go With Your Business Next Level</p>
</div>

<form  onSubmit={submitForm}>


<Label htmlFor="name" > Name*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="name" 
 onChange={handleInputChange}
  placeholder='Name' name='name' required
 />



<Label htmlFor="email" > Email*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
  id="phone" 
 onChange={handleInputChange}
 type="email" placeholder='Email' name='email' required
 />



<Label htmlFor="password" > Password*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="password" id="password" placeholder="Password"
 onChange={handleInputChange}
           name='password'
 />



<Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700" > Sign Up</Button>


</form>

<p className='mt-6 text-slate-500' 
>Already Have an Account? <Link href="/">Login</Link> Here.</p>

</div>

{/* <div className='relative hidden md:block'>
<Player
  autoplay
  loop
  src="https://lottie.host/be5b509b-560d-4f49-bab6-eadfe780189a/l46ueeJ6GM.json"
  style={{  width: '500px' }}
>
</Player>

</div> */}
      </div>
  )
}

export default UserForm