"use client"
import React from 'react'
import { ResponsiveContainer, BarChart as BarGraph, XAxis, YAxis, Bar } from 'recharts'


const data = [
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
    {
        name: "Jan", 
        total: Math.floor(Math.random()*5000)+1000,
    },
]



function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
<BarGraph data={data}>

<XAxis
dataKey={"name"}
tickLine={false}
axisLine={false}
stroke='#888888'
fontSize={12}
/>
<YAxis

tickLine={false}
axisLine={false}
stroke='#888888'
fontSize={12}
tickFormatter={(value)=> `$${value}`}
/>

<Bar dataKey={"total"} radius={[4,4,0,0]}/>

</BarGraph>
    </ResponsiveContainer>
  )
}

export default BarChart