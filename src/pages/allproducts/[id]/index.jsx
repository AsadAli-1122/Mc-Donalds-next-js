import React from 'react'

import Layoutallproducts from '../../components/Layouts/Layoutallproducts'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../components/header/Sidebar';
import Products from '../../data/products/Products.json'

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  const cat = Products.find(p => p.id === id);

  if (!cat) {
    return (
      <Layoutallproducts>
        <div className='flex'>
        <Sidebar />
        <div className='text-center w-full my-20'>
          <h2 className='text-5xl font-bold'>Category not found</h2>
        </div>
        </div>
      </Layoutallproducts>
    );
  }
  
  return (
    <Layoutallproducts title={`Mc'Donalds | ${cat.name}`}>
      <main>
        <div className='flex justify-between'>
          <Sidebar />
          <div className='w-full'>
            <div className='py-20 space-y-10'>
              <h2 className='text-center text-5xl font-bold'>{cat.name}</h2>
            </div>
            <div className='grid grid-cols-3'>
              {cat.products.map((item)=>(
            <div key={item.id} className='flex flex-col justify-center items-center w-full p-3 text-center font-semibold'>
              <Link href={`/allproducts/${cat.id}/${item.id}`} className='flex flex-col items-center justify-center space-x-6'>
                <Image
                  src={`/images/products/allproducts/${item.imgSrc}`}
                  alt={item.name}
                  width={600}
                  height={600}
                  className='w-44'
                  priority
                />
                <p className='text-xl'>{item.name}</p>
              </Link>
            </div>
            ))}
            </div>
          </div>
        </div>

      </main>
    </Layoutallproducts>
  )
}
