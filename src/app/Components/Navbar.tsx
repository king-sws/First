import React from 'react'
import { Nav } from '../constants/Nav'
import Link from 'next/link'
import Logo from './Logo'
import Mobile from './Mobile'

function Navbar() {
  return (
    <header className='py-6 fixed top-0 left-0  w-full bg-slate-900/50 backdrop-blur-md z-30  ' >
        <div className="container relative flex justify-between">
            <Logo/>
            <nav className="hidden gap-8 md:flex">
                {Nav.map((link,index)=>(
                    <Link key={index} href={`#${link}`} className='text-sm font-semibold capitalize hover:text-sky-300 tracking-wide justify-center text-slate-200 ' >
                        {link}
                    </Link>
                ))}
            </nav>
            <Mobile/>
        </div>
    </header>
  )
}

export default Navbar