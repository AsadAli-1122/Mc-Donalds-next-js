import Layoutdefault from './components/Layouts/Layoutdefault'
import Posters from '../pages/data/posters/PostersData.json'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function Default() {
  return (
    <Layoutdefault title="McDonald's: Burgers, Fries & More. Quality Ingredients.">
      <div className='my-20'>
        {Posters.Default.map((poster) => (
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
    </Layoutdefault>
  )
}
