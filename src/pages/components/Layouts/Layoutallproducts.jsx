import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Layoutallproducts({ children, title }) {

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="flex max-w-6xl mx-auto space-x-6">
        <main className="w-full h-auto">{children}</main>
      </div>
      <div className='max-w-6xl mx-auto flex flex-col space-y-12 py-12'>
        <p className='text-[15px]'>Ready to order? Get the McDonald's App to place an order for Drive Thru and Curbside pickup, for your favorite McDonald's food and beverages, or order McDelivery! Our full McDonald's menu features everything from breakfast menu items, burgers, and more! The McDonald's lunch and dinner menu lists popular favorites including the Big Mac® and our World Famous Fries®. The full menu at McDonald's has something to feed your cravings!</p>
        <p className='text-xs'>*Weight before cooking 4 oz.</p>
        <div className='grid grid-cols-3 h-full'>
          <div className="m-4 max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className='w-full'>
              <Image
                src="/images/products/allproducts/product (128).jpg"
                alt=""
                width={500}
                height={500}
                className='w-full'
                priority
              />
            </div>
            <div className="p-7 flex flex-col justify-between h-[70%] space-y-6">
              <div className='flex flex-col space-y-8'>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Earn Points for Free McDonald’s</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your favorites just got more rewarding. Earn points on all your orders that you can redeem for free McDonald's when you join in the app. *</p>
              </div>
              <div className='flex flex-col space-y-8'>
                <Button variant='contained' className='btn' >Join Now</Button>
                <p className='text-xs'>* Program available only at participating McDonald's. Refer to <Link href="" className='text-blue-500 underline underline-offset-2 hover:text-blue-700'>MyMcDonald’s Program Terms</Link> for details. McD app download and registration required.</p>
              </div>
            </div>
          </div>
          <div className="m-4 max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className='w-full'>
              <Image
                src="/images/products/allproducts/product (13).jpg"
                alt=""
                width={500}
                height={500}
                className='w-full'
                priority
              />
            </div>
            <div className="p-7 flex flex-col justify-between h-[70%] space-y-6">
              <div className='flex flex-col space-y-8'>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Not a Morning Person?</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skip the awkward pre-coffee talk with Mobile Order & Pay and Curbside pickup. *</p>
              </div>
              <div className='flex flex-col space-y-8'>
                <Button variant='contained' className='btn' >Order Breakfast Using the App</Button>
                <p className='text-xs'>* McDonald’s app download and registration required. Mobile Order & Pay available at participating McDonald’s.</p>
              </div>
            </div>
          </div>
          <div className="m-4 max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className='w-full'>
              <Image
                src="/images/products/allproducts/product (127).jpg"
                alt=""
                width={500}
                height={500}
                className='w-full'
                priority
              />
            </div>
            <div className="p-7 flex flex-col justify-between h-[70%] space-y-6">
              <div className='flex flex-col space-y-8'>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Free Fries Friday</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get a free medium Fries with any $1 minimum purchase, only in the McDonald’s app.* Make it fry day with a friend. *</p>
              </div>
              <div className='flex flex-col space-y-8'>
                <Button variant='contained' className='btn' >Get Free Fries in the App</Button>
                <p className='text-xs'>* Must be opted into Rewards. Valid 1x each Friday thru 12/31/23 at participating McDonald’s. Excludes tax.</p>
              </div>
            </div>
          </div>
        </div>
        <p className='text-xs'>Important Note : <br />
          At McDonald's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the nine most common allergens as identified by the U.S. Food and Drug Administration (eggs, dairy, wheat, soy, peanuts, tree nuts, fish, shellfish and sesame), so that our guests with food allergies can make informed food selections. However, we also want you to know that despite taking precautions, normal kitchen operations may involve some shared cooking and preparation areas, equipment and utensils, and the possibility exists for your food items to come in contact with other food products, including allergens. We encourage our customers with food allergies or special dietary needs to visit www.mcdonalds.com for ingredient information, and to consult their doctor for questions regarding their diet. If you have questions about our food, please reach out to us directly using our contact us forms. <br />
          <br />
          Percent Daily Values (DV) and RDIs are based on unrounded values. <br />
          <br />
          **Percent Daily Values (DV) are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs. <br />
          <br />
          The nutrition information on this website is derived from testing conducted in accredited laboratories, published resources, or from information provided from McDonald's suppliers. The nutrition information is based on standard product formulations and serving sizes.  Calories for fountain beverages are based on standard fill levels plus ice. If you use the self-service fountain inside the restaurant for your drink order, see the sign posted at the beverage fountain for beverage calories without ice. All nutrition information is based on average values for ingredients and is rounded in accordance with current U.S. FDA NLEA regulations. Variation in serving sizes, preparation techniques, product testing and sources of supply, as well as regional and seasonal differences may affect the nutrition values for each product. In addition, product formulations change periodically. You should expect some variation in the nutrient content of the products purchased in our restaurants. Beverage sizes may vary in your market. McDonald’s USA does not certify or claim any of its US menu items as Halal, Kosher or meeting any other religious requirements. We do not promote any of our US menu items as vegetarian, vegan or gluten-free. This information is correct as of January 2022, unless stated otherwise.
        </p>
      </div>
      <Footer />
    </div>
  )
}
