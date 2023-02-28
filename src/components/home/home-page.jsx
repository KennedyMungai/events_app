import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePageContent = ({ data }) =>
{
    return (
        <main>
            <div className="home-body">
                {
                    data.map((ev) =>
                    {
                        return (
                            <Link
                                key={ev.id}
                                href={`/events/${ev.id}`}
                                className='card'
                            >
                                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                                <h1>{ev.title}</h1>
                                <p>{ev.description}</p>
                            </Link>)
                    })
                }
            </div>
        </main>
    )
}

export default HomePageContent