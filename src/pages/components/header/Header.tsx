import Image from 'next/image'
import { Button } from '@mui/material'
import Navbar from './Navbar'
import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='cmn w-full'>
            <div>
                <Link href="/" >
                    <Image
                        src="/images/arches-logo_108x108.jpg"
                        alt="Mc'donalds Logo"
                        width={100}
                        height={100}
                        className='w-28'
                        priority
                    />
                </Link>
            </div>

                <Navbar />

            <div>
                <Button variant="contained" className='btn z-0 whitespace-nowrap' >Order Now</Button>
            </div>
        </div>
    )
}
