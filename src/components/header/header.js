import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () =>
{
    return (
        <header>
            <div>
                <Image src={ } width={50} height={50} />
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