import React from 'react'
import Layoutallproducts from '../components/Layouts/Layoutallproducts'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "../components/header/Sidebar";
import Products from '../data/products/Products.json'

export default function Index() {
  return (
    <Layoutallproducts title="McDonald's Menu: Our Full McDonald's Food Menu" >
      <div className='flex'>
        <Sidebar />
        <main className='w-full'>
          <div className='py-20 space-y-10'>
            <h1 className='text-center text-5xl font-extrabold'>McDonald's Menu</h1>
            <h2 className='text-center text-3xl font-bold'>Featured Favorites</h2>
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
      <div className="max-w-6xl mx-auto w-full">
      {Products.map(category => (
        <div className="w-full my-8 ">
          <h2 className="text-5xl font-bold mb-4 text-center ">{category.name}</h2>
          <div className="grid grid-cols-4 gap-10 ">
            {category.products.map(product => (
              <Link href="" className="bg-white rounded-lg shadow-lg p-4">
                <div className="text-gray-600 mb-2 ">
                  <Image 
                  src="/images/products/allproducts/product (50).jpg"
                  alt=""
                  width={500}
                  height={500}
                  className=''
                  priority
                  />
                  </div>
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    </Layoutallproducts>
  )
}
