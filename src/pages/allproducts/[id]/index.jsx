import React from 'react'

import Layoutallproducts from '../../components/Layouts/Layoutallproducts'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';

export default function index() {
  const router = useRouter();
  const { id } = router.query

  return (
    <Layoutallproducts>
      <div className=''>
      <main>
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



      </main>

      </div>
    </Layoutallproducts>
  )
}
