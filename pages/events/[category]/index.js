import Link from 'next/link'
import React from 'react'

const Events = () =>
{
    return (
        <div>
            <h1>Events In London</h1>
            <Link href='/events/event1'>Event 1</Link>
            <Link href='/events/event2'>Event 2</Link>
            <Link href='/events/event3'>Event 3</Link>
            <Link href='/events/event4'>Event 4</Link>
            <Link href='/events/event5'>Event 5</Link>
            <Link href='/events/event6'>Event 6</Link>
        </div>
    )
}

export default Events