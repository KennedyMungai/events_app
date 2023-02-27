import React from 'react'

const EventPage = () =>
{
    return (
        <div>The Single Event</div>
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
    console.log(context)
    const { allEvents } = await import('../../../data/data.json')

    return {
        props: {

        }
    }
}