import Link from 'next/link'
import React from 'react'

const EventsCategoryPage = () =>
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

export default EventsCategoryPage

export async function getStaticPaths()
{
    const { events_categories } = await import('../../../data/data.json')

    const allPaths = events_categories.map((event) =>
    {
        return {
            params: {
                cat: event.id.toString()
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
    const id = context?.params.category
    const { allEvents } = await import('../../../data/data.json')
    // console.log(id)

    const data = allEvents.filter((event) => event.city === id)

    console.log(data)

    return {
        props: {
            data
        }
    }
}