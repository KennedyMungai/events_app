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

    return {
        paths: []
    }
}

export async function getStaticProps()
{

}