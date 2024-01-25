import { cn } from '@/lib/utils';
import React from 'react'


function Card({data }) {

    const {label, icon, amount, discription} = data;
  return <CardContent>
    <section className='flex justify-between gap-2'>
        <p className='text-sm'>{label}</p>
        <span className="h-4 w-4 text-gray-400">{icon} </span>
    </section>
    <section className='flex flex-col gap-1'>
        <h2 className='font-2xl font-semibold'>{amount}</h2>
        <p className='text-xs text-gray-500'>{discription}</p>
    </section>
  </CardContent>
}

export default Card


export function CardContent (props){
    return(
        <div
        {...props}
        className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)}

        />

        
    )
}