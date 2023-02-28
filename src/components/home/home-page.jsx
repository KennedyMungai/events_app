import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePageContent = ({ data }) =>
{
    return (
        <main>
            {
                data.map((ev) =>
                {
                    return (<Link key={ev.id} href={`/events/${ev.id}`}>
                        <Image src={ev.image} alt={ev.title} width={100} height={100} />
                        <h1>{ev.title}</h1>
                        <p>{ev.description}</p>
                    </Link>)
                })
            }
        </main>
    )
}

export default HomePageContent