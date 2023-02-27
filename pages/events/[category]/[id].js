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
    return {
        paths: []
    }
}

export async function getStaticProps()
{

}