import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2' >
      <Image src="/img/logo.png" width={32} height={32} alt='logo' />
      <div className="relative">
        <h1 className='text-xl font-bold text-white tracking-wide' >KiNG</h1>
        <div className="absolute -right-2.5 w-2 h-2 bottom-1.5 bg-sky-700 rounded-full  "></div>
      </div>
    </Link>
  )
}

export default Logo