import React from 'react'

function RequestCard({data}) {

    const {name, phone, serviceName} = data;
  return (
    <div className='flex flex-wrap justify-between gap-3'>
        <section className='flex justify-between gap-3'>

            <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                <img width={200} height={200} src='https://api.dicebear.com/7.x/lorelei/svg?seed=Smokey' alt='no'/>
            </div>
            <div className='text-sm'>
                <p>{name}</p>
                <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>
                    {phone}
                </div>
            </div>

        </section>
        <p>{serviceName}</p>

    </div>
  )
}

export default RequestCard