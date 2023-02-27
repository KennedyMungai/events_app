import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = () =>
{
    return (
        <div>
            <h1>Events Page</h1>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In London</h2>
            </Link>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In LA</h2>
            </Link>
            <Link href="/">
                <Image src="" alt="" />
                <h2>Events In Lima</h2>
            </Link>
        </div>
    )
}

export default Events