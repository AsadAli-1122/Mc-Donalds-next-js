import React from 'react'
import Layoutdefault from './components/Layouts/Layoutdefault'
import Posters from '../pages/data/posters/PostersData.json'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Deals() {
  return (
    <Layoutdefault title="McDonald’s Coupons & Deals Near Me | McDonald’s" >


      <div className='mx-auto px-10 text-center text-5xl mt-20 mb-10 font-bold'>MyMcDonald’s Rewards</div>

      <div className='my-20'>
        {Posters.Deals.map((poster) => (
          <div key={poster.id} className='flex flex-col xl:flex-row cmn my-20'>
            <div className=''>
              <Image
                src={poster.imgSrc}
                alt={[poster.title, "Poster Image"]}
                width={2200}
                height={600}
                className=''
                priority
              />
            </div>
            <div className='flex flex-col justify-between space-y-6 px-6 w-full'>
              <h1 className='text-4xl font-bold'>{poster.title}</h1>
              <h2 className='text-base font-normal'>{poster.description}</h2>
              <p className='text-xs'>{poster.smallDetails}</p>
              <Button variant="contained" className='btn z-0 whitespace-nowrap' >{poster.btnText}</Button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 gap-4 max-w-6xl mx-auto h-full'>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/2Pub_Q3_ASCoffee_574x384.png"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$0.99 for Any Size Coffee*</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">That’s 99 reasons to go for Premium Roast or Iced Coffee at any time, only in the app.</p>
              <p className='text-xs'>*Offer valid  thru 12/31/23 at participating McDonald’s. Valid 1x/day. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required.</p>
              <Button variant='contained' className='btn' >Get Deal in the App</Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/1pub_FFF_2336x1040_2-column-desktop.jpg"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Free Fries Friday</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get a free medium Fries with any $1 minimum purchase, only in the McDonald’s app.* Make it fry day with a friend.</p>
              <p className='text-xs'>*Must be opted into Rewards. Valid 1x each Friday thru 12/31/23 at participating McDonald’s. Excludes tax.</p>
              <Button variant='contained' className='btn' >Get Free Fries in the App</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex justify-between space-x-8 my-24'>
        <div>
          <Image
            src="/images/1PUB_Desktop_Curbside_376x252_2-column-desktop.jpg"
            alt=""
            width={600}
            height={400}
            className='h-full'
            priority
          />
        </div>
        <div className='flex flex-col space-y-8 justify-between h-auto'>
          <h1 className='text-4xl font-bold'>Get Your Free Fries* with Contactless Mobile Ordering and Curbside Pickup</h1>
          <p className='font-semibold'>Get free medium Fries every Friday with any minimum $1 purchase.*</p>
          <p className='text-xs'>*Offer valid 1x each Friday thru 12/31/23 with minimum purchase of $1 (excluding tax). McD app download and registration required. ©2023 McDonald's</p>
          <Button variant='conatined' className='btn capitalize' >Use the App to Order</Button>

          {/* <div className='flex space-x-12' >
            <Image
              src="/images/app_store_badge.png"
              alt=""
              width={120}
              height={100}
              className=''
              priority
            />
            <Image
              src="/images/google_play_badge.png"
              alt=""
              width={120}
              height={100}
              className=''
              priority
            />
          </div> */}
        </div>
      </div>

    </Layoutdefault>
  )
}
