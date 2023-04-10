import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Products from '../../data/products/Products.json'
import React from 'react'

export default function Sidebar() {
    const router = useRouter();
    const active = "flex items-center pl-4 pr-2 pb-1 space-x-4 border-l-4 border-red-700";
    const normal = "flex items-center pl-4 pr-2 pb-1 space-x-4 border-l-4 border-white hover:border-l-4 hover:border-red-700";

    const featuredFavorites = Products.filter((product) => product.id === "featured-favorites");
    const otherProducts = Products.filter((product) => product.id !== "featured-favorites");

  return (
    <>
    <div className='inline-block'>
    <div className='flex flex-col'>
      <div className='my-10 border border-gray-300 rounded overflow-hidden pr-8'>
      {featuredFavorites.map((product)=>(
        <Link key={product.id} href={product.href}  className={router.asPath == `${product.href}` ? `${active}` : `${normal}`}>
            
        <Image 
        src={`/images/products/${product.imageSrc}`}
        alt={product.altText}
        width={100}
        height={100}
        className='w-20'
        priority
        />
        <p className='w-32 text-sm font-medium'>{product.name}</p>
        </Link>
        ))}
      </div>
      <div className='my-10 border border-gray-300 rounded overflow-hidden pr-8'>
        {otherProducts.map((product)=>(
        <Link key={product.id} href={product.href}  className={router.asPath == `${product.href}` ? `${active}` : `${normal}`}>
            
        <Image 
        src={`/images/products/${product.imageSrc}`}
        alt={product.altText}
        width={100}
        height={100}
        className='w-20'
        priority
        />
        <p className='w-32 text-sm font-medium'>{product.name}</p>
        </Link>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}
