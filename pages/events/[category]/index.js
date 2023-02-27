import Link from 'next/link'
import React from 'react'

const Events = () =>
{
    return (
        <div>
            <h1>Events In London</h1>
            <Link href='/event/event1'></Link>
            <Link href='/event/event2'></Link>
            <Link href='/event/event3'></Link>
            <Link href='/event/event4'></Link>
        </div>
    )
}

export default Events