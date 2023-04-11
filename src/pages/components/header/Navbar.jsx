import { useState } from 'react'
import { Button } from '@mui/material'
import { Dialog, Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import products from '../../data/products/Products.json'

const pages = [
  {
    id: "download",
    name: "Download App",
    herf: "download"
  },
  {
    id: "rewards",
    name: "MyMcDonald's Rewards",
    herf: "rewards"
  },
  {
    id: "deals",
    name: "Exclusive Deals",
    herf: "deals"
  },
  {
    id: "about",
    name: "About Our Food",
    herf: "about"
  },
  {
    id: "locate",
    name: "Locate",
    herf: "locate"
  },
  {
    id: "gift",
    name: "Gift Cards",
    herf: "gift"
  },
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();

  const normal = "nav-product pb-5 border-b-4 border-white hover:border-b-4 hover:border-red-700";
  const active = "nav-product font-bold border-b-4 border-red-700"

  // const featuredFavorites = Products.filter((product) => product.id === "featured-favorites");
  // const otherProducts = Products.filter((product) => product.id !== "featured-favorites");

  return (

    <div className="bg-white w-full mt-8">
      <div className="flex xl:hidden w-full">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
      </div>
      <div className="pr-6 space-y-6">
        <div className='flex justify-between text-sm'>
          <div className='flex space-x-6'>
            <Link href="/" >Language</Link>
            <Link href="/" >Sign Up for Emails</Link>
            <Link href="/" >Careers</Link>
          </div>
          <div className='flex space-x-6'>
            <p>Search</p>
            <p>Change your Location</p>
          </div>
        </div>
        <div className='justify-between hidden xl:flex w-full'>
          <Link href="/allproducts" className={router.pathname.includes('allproducts') ? `${active}` : `${normal}`} >
            Our Menu <i className="fa-solid fa-chevron-down ml-6 ease-in-out duration-300 text-center"></i>
          </Link>
          <div className='hidden nav-products absolute right-0 left-0 top-0 w-screen border border-gray-400 py-8 bg-white mt-[124px] z-10'>
            <div className=' max-w-6xl mx-auto grid xl:grid-cols-3 pb-8'>
              {products.map((item) => (
                <div key={item.id} className=' pl-20'>
                  <Link href={`${item.href}`} className='flex items-center space-x-6 w-fit'>
                    <Image
                      src={`/images/products/${item.imageSrc}`}
                      alt={item.altText}
                      width={100}
                      height={100}
                      className='w-20'
                      priority
                    />
                    <p>{item.name}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center'>
              <Link href="/allproducts">
                <Button variant="contained" className='btn' >See All Products</Button>
              </Link>
            </div>
          </div>
          {pages.map((page) => (
            <Link
              key={page.id}
              href={`/${page.id}`}
              className={router.pathname.includes(`${page.id}`) ? `${active}` : `${normal}`}
            >
              {page.name}
            </Link>
          ))}

        </div>
      </div>
      <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="space-y-2 py-6">
            <Disclosure as="div" className="-mx-3">
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                Product
                <i className="fa-solid fa-chevron-down "></i>
              </Disclosure.Button>
              <Disclosure.Panel className="space-y-1">
                {products.map((item, index) => (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={item.href}
                    className="block rounded-lg pl-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <div className='flex items-center space-x-8'>
                      <Image
                        src={`/images/products/${item.imageSrc}`}
                        alt={item.altText}
                        width={50}
                        height={50}
                        className='w-14 '
                        priority
                      />
                      <p className=''>
                        {item.name}
                      </p>
                    </div>
                  </Disclosure.Button>
                ))}
              </Disclosure.Panel>
            </Disclosure>
            <div className='flex flex-col space-y-4'>
              {/* Mobile  */}
              {pages.map((page) => (
                <Link key={page.id} href={page.herf} className="font-xl" >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
