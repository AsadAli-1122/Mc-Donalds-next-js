import React from 'react'
import Layoutdefault from './components/Layouts/Layoutdefault'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function About() {
  const data = [
    {
      title : "Commitment to Quality",
      image : "2_Pub_Commitment_574x384_2-column-desktop.jpg",
      description: "We're dedicated to improving the way we prepare our quality food and the ingredients that go into it.",
      btn: "Learn More"
    },
    {
      title : "What's in Your Food",
      image : "2_Pub_Whats_In_Your_Food_574x384_2-column-desktop.jpg",
      description: "Find out what makes our ingredients special.",
      btn: "Learn More"
    },
    {
      title : "Our Food Philosophy",
      image : "about-food_philosophy_pub-2-col_1110x740_2-column-desktop.jpg",
      description: "We’re passionate about our food. That’s why we’re committed to always evolving what matters to you.",
      btn: "Learn More"
    },
    {
      title : "Nutrition Calculator",
      image : "TwoPub_Desktop_NutritionCalculator_1110x740_2-column-desktop.jpg",
      description: "Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals.",
      btn: "Learn More"
    },
    {
      title : "Our Food Experts",
      image : "Our_Food_Experts_2-col_1110x740_2-column-desktop.jpg",
      description: "From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat.",
      btn: "Learn More"
    },
    {
      title : "Fresh Beef",
      image : "2Pub_QPC_1110x740_2-column-desktop.jpg",
      description: "Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order. It’s hot and deliciously juicy and full of flavor.",
      btn: "Learn More"
    },
    {
      title : "Happy Meal® Nutrition",
      image : "2_Pub_Happy_Meal_574x384_2-column-desktop.jpg",
      description: "When your kids enjoy a meal that’s delicious and balanced, you’ll enjoy it too.",
      btn: "Learn More"
    },
    {
      title : "Variety of Choices",
      image : "Variety_2Col_1110x740_Desktop_2-column-desktop.jpg",
      description: "When it comes to quality options, we’ve got you covered.",
      btn: "Learn More"
    }
  ]
  return (
    <Layoutdefault title="About Our Food: Learning the Facts | McDonald’s" >
      
      <div className='mx-auto px-10 text-center text-5xl mt-20 mb-8 font-bold'>About Our Food</div>
      <div className='max-w-6xl mx-auto mb-20'>
        <Image 
        src="/images/About_Our_Food_Hero_1260x560_Desktop_hero-desktop.jpg"
        alt=""
        width={1000}
        height={700}
        className='w-full'
        priority
        />
      </div>
      
      <div className='mx-auto px-4 max-w-6xl text-4xl mt-20 mb-6 font-bold'>We’re Passionate About Our Food</div>
      <p className='mx-auto px-4 max-w-6xl mb-20'>From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. </p>

      <div className='grid grid-cols-2 gap-4 max-w-6xl mx-auto h-full'>
        {data.map((p)=>(
        <div key={p.title} className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className='w-full'>
            <Image
              src={`/images/${p.image}`}
              alt=""
              width={500}
              height={500}
              className='w-full'
              priority
            />
          </div>
          <div className="py-7 flex flex-col space-y-6">
            <div className='flex flex-col space-y-4'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{p.title}</h1>
              <p className="pb-10 font-normal text-gray-700 dark:text-gray-400">{p.description}</p>
              <Button variant='contained' className='btn'>Learn More</Button>
            </div>
          </div>
        </div>
        ))}
      </div>

    </Layoutdefault>
  )
}
