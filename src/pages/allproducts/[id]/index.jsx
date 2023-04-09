import React from 'react'

import Layoutallproducts from '../../components/Layouts/Layoutallproducts'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../components/header/Sidebar';
import Products from '../../data/products/Products.json'

export default function index() {
  const router = useRouter();
  const { id } = router.query

  return (
    <Layoutallproducts>
          <main>
      <div className='flex justify-between'>
        <Sidebar />
        <div className='w-full'>
            <div className='py-20 space-y-10'>
              <h2 className='text-center text-5xl font-bold'>{id}</h2>
            </div>
            <div className='grid grid-cols-3'>
            {Products.map((product)=>(
              <div className='flex flex-col justify-center items-center w-full p-3 text-center font-semibold'>
                <Link href="" className='flex flex-col space-x-6'>
                  <Image
                    src={`/images/products/${product.imageSrc}`}
                    alt={product.altText}
                    width={2200}  
                    height={600} 
                    className='w-44'
                    priority
                  />
                  <p className='text-center font-semibold'>{product.name}</p>
                </Link>
              </div>
            ))}
            </div>
        </div>
      </div>
      {/* <div>
        <p>Ready to order? Get the McDonald's App to place an order for Drive Thru and Curbside pickup, for your favorite McDonald's food and beverages, or order McDelivery! Our full McDonald's menu features everything from breakfast menu items, burgers, and more! The McDonald's lunch and dinner menu lists popular favorites including the Big Mac® and our World Famous Fries®. The full menu at McDonald's has something to feed your cravings!</p>
        <p className='text-xs'>*Weight before cooking 4 oz.</p>
      </div> */}

          </main>
    </Layoutallproducts>
  )
}
