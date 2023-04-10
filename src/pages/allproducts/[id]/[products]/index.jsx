import { useRouter } from 'next/router';
import Products from '../../../data/products/Products.json'
import React from 'react'
import Layoutallproducts from '../../../components/Layouts/Layoutallproducts';

export default function index() {
  const router = useRouter();
  const { id, products } = router.query;

 // Find the category object that matches the id
 const cat = Products.find(cat => cat.id === id);

if (!cat) {
  return (
      <div className='flex'>
      <div className='text-center w-full my-20'>
        <h2 className='text-5xl font-bold'>Category not found</h2>
      </div>
      </div>
  );
}

 // Find the product object that matches the products id within the category
 const product = cat.products.find(product => product.id === products);

 if (!product) {
  return (
      <div className='flex'>
      <div className='text-center w-full my-20'>
        <h2 className='text-5xl font-bold'>Product not found</h2>
      </div>
      </div>
  );
}

  return (
    <>
      <Layoutallproducts title={`Mc'Donalds Best | ${product.name}`}>
        <div>
          {product.name}
        </div>
      </Layoutallproducts>
    </>
  )
}
