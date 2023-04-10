import Layoutdefault from './components/Layouts/Layoutdefault'
import Posters from '../pages/data/posters/PostersData.json'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function Download() {
  return (
    <Layoutdefault title="Download the McDonald's App: Deals, Promotions & Rewards | McDonald's">
      <div className='text-center text-5xl my-20 font-bold'>McDonald's App</div>
      <div className='my-20'>
        {Posters.Download.map((poster) => (
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
      <div className='cmn'>
        <div>
          <Image
            src="/images/AppPromo_DownloadApp_475x360.jpg"
            alt=""
            width={600}
            height={600}
            className=''
            priority
          />
        </div>
        <div className='flex flex-col space-y-10 justify-center'>
          <h1 className='text-6xl font-bold'>Deliciousness At Your Fingertips</h1>
          <p className='font-semibold'>Download the app for exclusive deals and easy ordering.</p>
          <div className='flex space-x-12' >
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
          </div>
        </div>
      </div>
        <div className='max-w-6xl mx-auto flex-col space-y-6 my-12 '>
          <h1 className='text-3xl font-bold'>Deals and Much More</h1>
          <p>With the McDonald’s app, you’ll get access to exclusive deals. Use the app to order ahead and pass the line with Mobile Order & Pay plus join MyMcDonald’s Rewards to earn points on every order to redeem for free McDonald's.</p>
        </div>
    </Layoutdefault>
  )
}

