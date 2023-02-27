import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = ({ data }) =>
{
    return (
        <div>
            <h1>Event Page</h1>
            {data.map((event) =>
            {
                return (
                    <Link
                        href={`/events/${event.id}`}
                        key={event.id}
                    >
                        <Image src={event.image} alt={event.title} width='300' height='300' />
                        <h2>{event.title}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Events

export async function getServerSideProps()
{
    const { events_categories } = await import('../../data/data.json')

    return {
        props: {
            data: events_categories
        }
    }
}