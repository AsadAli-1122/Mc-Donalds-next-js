import React from 'react'

import Layoutallproducts from '../../components/Layouts/Layoutallproducts'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../components/header/Sidebar';

export default function index() {
  const router = useRouter();
  const { id } = router.query

  return (
    <Layoutallproducts>
          <main>
      <div className='flex'>
        <Sidebar />
        <div className=''>
            <div className='py-20 space-y-10'>
              <h1 className='text-center text-5xl font-extrabold'>McDonald's Menu</h1>
              <h2 className='text-center text-3xl font-bold'>{id}</h2>
            </div>
            <div className='grid grid-cols-3'>
              <div className='flex flex-col justify-center items-center w-full p-3 text-center font-semibold'>
                <Link href="" className='flex flex-col space-x-6'>
                  <Image
                    src="/images/products/allproducts/product (4).jpg"
                    alt="spicy mcCrispy"
                    width={600}
                    height={600}
                    className='w-44'
                    priority
                  />
                  <p>Spicy McCrispy™</p>
                </Link>
              </div>

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
