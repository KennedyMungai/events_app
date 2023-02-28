import Image from 'next/image'
import React from 'react'

const EventPage = ({ data }) =>
{
    return (
        <div className='single_event_details'>
            <Image
                src={data.image}
                alt={data.title}
                width={600}
                height={600}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <input type="email" name="email" id="email" />
            <button type="submit">Submit</button>
        </div>
    )
}

export default EventPage

export async function getStaticPaths()
{
    const { allEvents } = await import('../../../data/data.json')

    const allPaths = allEvents.map((path) =>
    {
        return {
            params: {
                category: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context)
{
    const id = context.params.id
    const { allEvents } = await import('../../../data/data.json')

    const data = allEvents.find((event) => id === event.id)

    return {
        props: {
            data
        }
    }
}