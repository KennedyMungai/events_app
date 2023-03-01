import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

const EventPage = ({ data }) =>
{
    const emailInputRef = useRef()
    const router = useRouter()
    const [message, setMessage] = useState('')

    const submitHandler = async (e) =>
    {
        e.preventDefault()

        const emailValue = emailInputRef.current.value
        const eventId = router?.query.id

        const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailValue.match(validRegex))
        {
            setMessage('Please write the correct email address')
        }

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

            if (!response.ok)
            {
                throw new Error(`Error: ${response.status}`)
            }

            const data = await response.json()

            setMessage(data.message)
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
            <p>{message}</p>
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