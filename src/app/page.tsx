import { ArrowRightCircle, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Heading from './Components/Heading'
import Button from './Components/Button'
import Link from 'next/link'
import { clients } from './constants/client'
import { features, featuresBlock } from './constants/features'
import FeatureCard from './Components/FeatureCard'
import featureBlock from './Components/featureBlock'
import FeatureBloock from './Components/featureBlock'
import PricingSection from './Components/PricingSection'
import { testimonials } from './constants/testimonials'
import TCard from './Components/TestimonalCard'
import FeatureBlock from './Components/featureBlock'


const page = () => {
  return (
    <main className='pt-24 lg:pt-28 antialiased' >
      <div className="relative container ">
        <Image src='/img/bg.png' width={1980} height={1080} alt='lo' className=' absolute w-full -top-20 left-0 opacity-10 -z-30 ' ></Image>
        {/* Home Section */}
        <section id='' className='relative' >
        <figure className='tool w-96 lg:w-[520px] h-96 bg-indigo-600 top-20 -left-40'/>
        <figure className='tool w-96 lg:w-[430px] h-96 bg-sky-600 top-[230px] right-1 md:right-20' />
          <div className="flex flex-col text-center space-y-12 ">
            <div className="flex flex-col items-center space-y-6">
              <p className="border capitalize border-slate-700 py-1 px-3 hover:border-sky-500 hover:bg-slate-800 cursor-pointer tracking-wide rounded-full text-xs ">new features is now available. 
              <ArrowRightCircle className='w-4 inline h-4 ml-1' />
              </p>
              <Heading title='A CRM dachboard for engineering teams' />
              <p className=' max-w-[46rem] sm:text-lg leading-normal capitalize lg:leading-8 ' >boost engineering teams productivity with ocean CRM dashboard that strealines project management, collabration, and data-driven decsion-making.</p>
              <div className="flex justify-between gap-4">
                <Button>get Started
                  <MoveRight className='w-4 h-4 ' />
                </Button>
                <Link href="#pricing" >
                  <Button variant='outline'>view pricing</Button>
                </Link>       
              </div>
            </div>
            <Image src="/img/hero-image.svg" width={670} height={370} alt='H' className='mx-auto shadow-xl' />
          </div>
        </section>
        {/* Home Section */}
        {/* Cleint Section */}
        <section className="max-w-[62rem] grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mx-auto gap-x-12 gap-y-6 " >
            {clients.map((items,index)=>(
                <Image key={index} src={items.imgUrl} alt={items.alt} width={120} height={80} className='w-40' />
            ))}
        </section>
        {/* Client Section */}
        {/* Featcher Section */}
        <section className='flex flex-col gap-12 md:gap-y-20 lg:gap-y-28' id='featcher'>
    <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <Image src='/img/bg2.png' width={1920} height={1080} alt='section banner' className='absolute -z-50 top-0 w-full left-0 opacity-5' />
    <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
      <Heading title='Powerful features to help you manage all your leads.' />
      <p className='lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut a natus corrupti perferendis alias repudiandae facilis inventore tenetur vel laboriosam?</p>
      <Button>get started</Button>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
  {features.map((feature, index) => {
    return (
      <FeatureCard key={index} {...feature} />
    )
  })}
  </div>
    </div>
    {featuresBlock.map((item, index)=>(
              <FeatureBlock key={index} {...item} />
          ))}
        </section>
        {/* Featcher Section */}
        {/* Pricing Section */}
        <PricingSection/>
        {/* Pricing Section */}
        {/* Testimonals Section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title='Meet our Customers' isCenter />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-7 gap-4">
            {testimonials.map((item, index)=>(
              <TCard {...item} key={index} />
            ))}
          </div>
        </section>
        {/* Testimonals Section */}
        {/* Contact Section */}
        <section id="contact" className="">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-slate-800 rounded-xl px-8 lg:px-24 py-8 lg:py-12 ">
            <div className="flex flex-col text-center gap-4 lg:text-start ">
              <Heading title='Let’s try our service now!' />
              <p className='max-w-[35rem]  leading-normal text-lg' >
                Experience the power of Ocean CRM dashboard for engineering
                  teams. Boost productivity and streamline collaboration. Get
                  started today!
              </p>
            </div>
                <Button>
                  get started
                  <MoveRight className='w-4 h-4' />
                </Button>
          </div>
          
        </section>
        {/* Contact Section */}

      </div>
    </main>
  )
}

export default page
