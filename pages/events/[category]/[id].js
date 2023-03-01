import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

const EventPage = ({ data }) =>
{
    const emailInputRef = useRef()
    const router = useRouter()

    const submitHandler = async (e) =>
    {
        e.preventDefault()

        const emailValue = emailInputRef.current.value
        const eventId = router?.query.id

        try
        {
            // perform a fetch request for the api 
            // for body, emailValue and eventId
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    body: JSON.stringify({
                        email: emailValue,
                        eventId
                    })
                }
            })

            const data = await response.json()
        } catch (e)
        {
            console.log('Error', e)
        }
    }

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

            <form onSubmit={submitHandler}>
                <label htmlFor="email">Get registered for this event: </label>
                <div className="email_submission">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Please Enter Your Email'
                        ref={emailInputRef}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
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