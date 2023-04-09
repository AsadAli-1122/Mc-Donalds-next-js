import Layoutdefault from './components/Layouts/Layoutdefault'
import Posters from '../pages/data/posters/Default.json'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function Default() {
  return (
    <Layoutdefault title="McDonald's: Burgers, Fries & More. Quality Ingredients.">
      {Posters.map((poster)=>(
     <div key={poster.id} className=''>
      <div>
      <Image 
      src=""
      alt={[poster.title,"Poster"]}
      width={100}
      height={100}
      className=''
      priority
      />
      </div>
      <div>
        <h1>{poster.title}</h1>
        <h2>{poster.description}</h2>
        <p>{poster.smallDetails}</p>
        <Button variant="contained" className='btn z-0 whitespace-nowrap' >{poster.btnText}</Button>
      </div>
     </div>
      ))}
    </Layoutdefault>
  )
}
