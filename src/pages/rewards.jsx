import React from 'react'
import Layoutdefault from './components/Layouts/Layoutdefault'
import Posters from '../pages/data/posters/PostersData.json'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Rewards() {
  return (
    <Layoutdefault title="MyMcDonald's® Rewards: Get Free Food & Deals | McDonalds" >


      <div className='mx-auto px-10 text-center text-5xl mt-20 mb-10 font-bold'>MyMcDonald’s Rewards</div>
      <p className='mx-auto px-10 max-w-6xl mb-20'>With the McDonald’s app, you can earn points on every order to redeem for free McDonald's. Plus, get access to exclusive daily deals, easily re-order faves and select convenient pickup options with Mobile Order & Pay.</p>



      <div className='my-20'>
        {Posters.Rewards.map((poster) => (
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



      <div className='mx-auto px-10 max-w-6xl text-4xl mt-20 mb-6 font-bold'>How to Earn Points and Redeem Faves</div>
      <p className='mx-auto px-10 max-w-6xl mb-20'>Order like a pro––all it takes is one code or one scan to earn MyMcDonald’s Rewards points, quickly pay and redeem your favorites.</p>



      <div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto h-full'>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/3PUB_EARNPOINTS_376x376.jpg"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="p-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Easily Earn Points</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Select the ‘Earn Points’ tab in the McDonald's app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/3PUB_OneCode_Redeem_376x376.jpg"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="p-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Pay & Earn All in One Step</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Link your card details to the app so you can conveniently pay and earn points at the same time—including an extra 1500 Bonus Points on your first payment using your linked card. Then, simply tell us your Drive Thru code before placing your order at the speaker or scan the code in-restaurant.</p>
              <p className='text-xs'>*Bonus points may take up to 10 days to appear in your account. Rewards program available only at participating McDonald's. McDonald's app download and registration required.</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/3PUB_EarnandRedeem_Redeem_376x376.jpg"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="p-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Redeem Free McDonald’s</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Go to the Rewards & Deals tab. There you can select the menu item you want to redeem. Choose ‘Use at Restaurant’ to get the Drive Thru code, or select ‘Use Restaurant Code’ when you’re inside to reveal the code to use at the counter or kiosk.</p>
            </div>
          </div>
        </div>
      </div>



      <div className='mx-auto px-10 max-w-6xl text-4xl mt-20 mb-6 font-bold'>More Points Unlock More Rewards</div>
      <p className='mx-auto px-10 max-w-6xl mb-20'>It's easy to track your McDonald's points and see how far you are from unlocking the next tier of free McDonald's.</p>



      <div className='grid grid-cols-2 gap-4 max-w-6xl mx-auto h-full'>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/2PUB_Loyalty_Tiers_1500_574x384.png"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">1500 Points</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose your McDonald's item, whether you’re craving a McChicken® (Regular or Hot ‘N Spicy), Hash Browns, Vanilla Cone or our classic Cheeseburger.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/2PUB_Loyalty_Tiers_3000_574x384.png"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">3000 Points</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/2PUB_Loyalty_Tiers_4500_574x384.png"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">4500 Points</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src="/images/2PUB_Loyalty_Tiers_6000_574x384.jpg"
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">6000 Points</h1>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.</p>
            </div>
          </div>
        </div>
      </div>

      
    </Layoutdefault>
  )
}
