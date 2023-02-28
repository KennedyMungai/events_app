import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/images/logo_black.png'

const Header = () =>
{
    return (
        <header>
            <div className='topNav'>
                <Image src={Logo} width={50} height={50} alt='Logo' />
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/events">Events</Link>
                        </li>
                        <li>
                            <Link href="/about-us">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>The Events App</h1>
        </header>
    )
}

export default Header