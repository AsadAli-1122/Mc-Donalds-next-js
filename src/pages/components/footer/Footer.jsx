import * as React from 'react';
import List from './List'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  const links = [
    {
      id: "",
      image: "facebook.png"
    },
    {
      id: "",
      image: "instagram.png"
    },
    {
      id: "",
      image: "spotify.png"
    },
    {
      id: "",
      image: "tumblr.png"
    },
    {
      id: "",
      image: "twitter.png"
    },
    {
      id: "",
      image: "youtube.png"
    }
  ]
  return (
    <>
      <div className='grid xl:grid-cols-4 xl:gap-8 pl-6 pr-4 max-w-6xl mx-auto'>
        <List title="About Us" items={['About Us Overview', 'Our History', 'Leadership Team']} />
        <List title="Services" items={['Services Overview', 'Wi-Fi', 'PlayPlaces & Parties']} />
        <List title="Community" items={['Community', 'HACER® Scholarships for Hispanic Students', 'Ronald McDonald House']} />
        <List title="Contact Us" items={['Contact Us', 'Gift Card FAQs', 'Donations']} />
      </div>

      <div className='max-w-6xl mx-auto flex justify-between items-center mt-8'>
        <div className='space-x-6 px-4 flex'>
          {links.map((p, index) => (
            <Link kay={index} href={p.id}>
              <Image
                src={`/images/${p.image}`}
                alt={p.id}
                width={35}
                height={35}
                className=''
                priority
              />
            </Link>
          ))}
        </div>
        <div className='space-x-6 px-4 flex'>
        <Link href="" >
              <Image
                src="/images/app_store_badge.png"
                alt=""
                width={160}
                height={100}
                className=''
                priority
              />
            </Link>
            <Link href="" >
              <Image
                src="/images/google_play_badge.png"
                alt=""
                width={160}
                height={100}
                className=''
                priority
              />
            </Link>
        </div>
      </div>

      <hr className='max-w-6xl mx-auto px-4 my-10' />

    </>
  );
}
