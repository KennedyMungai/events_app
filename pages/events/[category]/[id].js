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
                id: path.id
            }
        }
    })

    return {
        paths: allPaths
    }
}

export async function getStaticProps()
{

}