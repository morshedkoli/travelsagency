"use client"

import React from 'react'
import  { useState } from 'react'
import swal from 'sweetalert';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { toast } from 'react-hot-toast';
import SubmitButton from './SubmitButton';
import { DNA } from 'react-loader-spinner';


function CustomerForm() {
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


    const [customerData, setCustomerData] = useState({})

  
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setCustomerData({
        ...customerData,
        [name]: value,
      });
    }

    async function submitForm(e){

      e.preventDefault()
  setIsButtonDisabled(true);
  setIsLoading(true)

      const NewCustomer =  {
        name:customerData.name ,
        email: customerData.email,
        number:customerData.number,
        address: customerData.address

      }

     const res = await fetch("/api/customer/create",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NewCustomer),
     })

     const data= await res.json()


     if(data.status==="success"){
      toast.success('Customer are Created Succefully');
      window.location.href="/dashboard/customers"


     }
    
     else if(data.status==="usermatch"){
      toast.error('Oh! Number are already exist in Our system');
      setIsLoading(false)

     }
     
     else{
      swal("Ohh!", `${data.data} Are Successfully Not Created as Customer`, "error");
      setIsLoading(false)

     }

     
    }


  return (
    <div className='grid w-full h-full  bg-white '>
      
<div className='   flex items-center justify-center  flex-col '>
  
<div className='my-4'>
  <h1 className='text-3xl font-semibold'>Add New Customer</h1>
  <p className='mt-2 text-xs text-slate-400'>
   
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



<Label htmlFor="number" > Number*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="number" id="number" placeholder="Number"
 onChange={handleInputChange}
           name='number'
 />


<Label htmlFor="address" > Address*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="address" id="address" placeholder="Address"
 onChange={handleInputChange}
           name='address'
 />



<Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700"  disabled={isLoading? true: false} >
  {isLoading? <span><DNA
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  
/>

</span> :"Create Customer"}
  </Button>
{/* <SubmitButton type="submit" text="Create Customer" disabled={isButtonDisabled}  /> */}

</form>



</div>


      </div>
  )
}

export default CustomerForm