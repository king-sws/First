'use client'
import React, { useState } from 'react'
import Heading from './Heading'
import { PricingMode } from '../Type/Type'
import { pricingItems } from '../constants/Pricing'
import PricingCard from './PricingCard'

const PricingSection = () => {
    const Bas = ' basis-1/2 py-2 text-center font-semibold rounded-lg text-white cursor-pointer capitalize tarcking-wide'
    const [mode , setmode] = useState<PricingMode>('monthly')
  return (
    <section id='pricing' className="flex flex-col gap-8">
        <Heading title='Find a paln to power your project' isCenter />
        <div className="flex cursor-pointer mx-auto bg-slate-800 rounded-lg text-base p-1 max-w-[12rem] w-full ">    
            <p className={`${Bas} ${mode ==="monthly" && 'bg-sky-600'}`} onClick={()=>{setmode('monthly')}}>monthly</p>
            <p className={`${Bas} ${mode ==="annually" && 'bg-sky-600'} `}onClick={()=>{setmode('annually')}}>annually</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingItems.map((items, index)=>(
            <PricingCard mode={mode} key={index} {...items} />
        ))}
        </div>
    </section>
  )
}

export default PricingSection