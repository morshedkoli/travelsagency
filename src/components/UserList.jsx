"use client"

import React, { useState, useEffect } from 'react'
import SingleCustomer from './customer/SingleCustomer';

async function getAllCustomers() {
  const result = await fetch(`http://localhost:3000/api/customer/getWithUser`);
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }
  return result.json();
}

function UserList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("data", data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCustomers();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
                  
            <div className='flex  flex-wrap '>
            {data.data.map((customer) => (
           <div key={customer['id']} className='w-full md:w-1/2 p-2'>
              <SingleCustomer customer={customer} key={customer.id}/>
           </div>
            ))}
            </div>
          
        </>
      )}
    </>
  );
}

export default UserList;
