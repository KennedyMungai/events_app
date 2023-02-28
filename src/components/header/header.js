import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/images/logo_black.png'

const Header = () =>
{
    return (
        <header>
            <div>
                <Image src={Logo} width={50} height={50} alt='Logo' />
                <nav>
                    <Image src="" alt="" />
                    <Link href="/">Home</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/about-us">About</Link>
                </nav>
            </div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, esse.</h1>
        </header>
    )
}

export default Header