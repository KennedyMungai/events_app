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
                                <div className="image">
                                    <Image src={ev.image} alt={ev.title} width={300} height={300} />
                                </div>
                                <div className="content">
                                    <h1>{ev.title}</h1>
                                    <p>{ev.description}</p>
                                </div>
                            </Link>)
                    })
                }
            </div>
        </main>
    )
}

export default HomePageContent