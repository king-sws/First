'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Nav } from '../constants/Nav'
import Link from 'next/link'

const Mobile = () => {
    const [isopen , setopen] = useState<boolean>(false)
    const Toogle = ()=>{
        setopen(!isopen)
    }
  return (
    <>
    <div className="md:hidden flex cursor-pointer md:cursor-none" onClick={Toogle} >
        {!isopen ? <Menu/> : <X/> }
    </div>
    <figure className={`absolute top-14 p-2 w-auto z-50 right-6 bg-slate-700 rounded-lg ${isopen ? 'scale-y-100 opacity-100 visible' : 'scale-y-50 opacity-0 hidden' }`} >
        <nav className='flex flex-col w-full h-full space-y-2 font-normal tracking-wide capitalize ' >
            {Nav.map((link,index)=>(
                <Link href={`#${link}`} key={index} className='py-1 px-2 hover:bg-slate-500 hover:text-slate-200 rounded-lg' onClick={Toogle} >
                    {link}
                </Link>
            ))}
        </nav>
    </figure>
    </>
  )
}

export default Mobile