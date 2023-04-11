import React from 'react'
import Layoutallproducts from '../components/Layouts/Layoutallproducts'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "../components/header/Sidebar";
import Products from '../data/products/Products.json'

export default function Index() {

  const featuredFavorites = Products.filter((product) => product.id === "featured-favorites");
  const otherProducts = Products.filter((product) => product.id !== "featured-favorites");

  return (
    <Layoutallproducts title="McDonald's Menu: Our Full McDonald's Food Menu" >
      <div className='flex'>
        <Sidebar />
        <main className='w-full'>
          <div className='py-20 space-y-10'>
            <h1 className='text-center text-5xl font-extrabold'>McDonald &apos; s Menu</h1>
            <h2 className='text-center text-3xl font-bold'>Featured Favorites</h2>
          </div>
            {featuredFavorites.map((item,index) => (
          <div key={index} className='grid grid-cols-3'>
              {item.products.map((i)=>(
                  <div key={i.id} className='flex flex-col justify-center items-center w-full p-3 text-center font-semibold'>
                <Link href={`/allproducts/featured-favorites/${i.id}`} className='flex flex-col items-center justify-center space-x-6'>
                  <Image
                    src={`/images/products/allproducts/${i.imgSrc}`}
                    alt={i.name}
                    width={600}
                    height={600}
                    className='w-44'
                    priority
                  />
                  <p className='text-xl'>{i.name}</p>
                </Link>
              </div>

                ))}
          </div>
            ))}
        </main>
      </div>
      <div className="max-w-6xl mx-auto w-full">
        {otherProducts.map((category,index) => (
          <div key={index} className="w-full my-8 ">
            <h2 className="text-5xl font-bold mb-4 text-center ">{category.name}</h2>
            <div className="grid grid-cols-4 gap-10 ">
              {category.products.map(product => (
                <Link key={product.id} href={`/allproducts/${category.id}/${product.id}`} className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg mx-4 my-8">
                  <div className="text-gray-600 mb-2 ">
                    <Image
                      src={`/images/products/allproducts/${product.imgSrc}`}
                      alt={product.name}
                      width={300}
                      height={300}
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
