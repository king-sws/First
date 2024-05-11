import React, { ReactNode } from 'react'
import Logo from './Logo'
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react'
import { footerColumns } from '../constants/footer-link'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const SocialM : ReactNode[] = [
        <Facebook key="f" className="social-link" />,
        <Instagram key="i" className="social-link" />,
        <Twitter key="t" className="social-link" />,
        <Github key="g" className="social-link" />,
        <Youtube key="y" className="social-link" />,
    ]
  return (
    <footer className='pt-20 pb-4' >
        <div className="container flex flex-col lg:flex-row " >
                <div className=" md:items-center lg:items-start gap-4 lg:gap-6 basis-1/3 flex flex-col gap-4">
                    <Logo/>
                    <p className='text-lg' >Making the world a better place through construction elegant hierarchies.</p>
                    <ul className='flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0 '>
                    {SocialM.map((item,index)=>(
                    <li key={index} className='cursor-pointer'>
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-6 lg:ps-8">
            {footerColumns.map((items , index)=>(
                <div key={index} className="flex flex-col ">
                    <h4 className='text-lg capitalize mb-6 text-slate-200 font-semiold' > {items.title} </h4>
                    <ul >
                        {items.links.map((items , index)=>(
                            <li key={index} className='hover:text-sky-600 cursor-pointer pb-3  font-normal transition-all hover:ps-1 ' > {items} </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </div>
        <div className="border-t border-slate-700 ">
            <p className='pt-4 capitalize text-center ' >
            {`© ${currentYear} KiNG, inc. all rights reserved.`}
            </p>
        </div>
    </footer>
  )
}

export default Footer
