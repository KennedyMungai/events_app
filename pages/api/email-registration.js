import path from 'path'
import fs from 'fs'

const buildPath = () =>
{
    return path.join(process.cwd(), 'data', 'data.json')
}

const extractData = (filePath) => 
{
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)

    return data
}

export default function handler(req, res)
{
    const { method } = req

    // Access the data
    // Extract the data (Inside the allEvents object)

    const filePath = buildPath()
    const data = extractData(filePath)

    const { allEvents, event_categories } = data

    if (!allEvents)
    {
        return res.status(404).json(
            {
                status: 404,
                message: 'Events data not found'
            }
        )
    }

    if (method === 'POST')
    {
        const { email, eventId } = req.body

        const newAllEvents = allEvents.map((event) => 
        {
            if (event.id === eventId)
            {
                if (event.emails_registered.includes(email))
                {
                    res.status(201).json(
                        {
                            message: 'This email has already been registered'
                        }
                    )
                }

                return {
                    ...event, emails_registered: [...event.emails_registered, email]
                }
            }
        })

        fs.writeFileSync(filePath, JSON.stringify({ event_categories, allEvents: newAllEvents }))

        res
            .status(200)
            .json(
                {
                    message: `You have been registered successfully with the email: ${email} ${eventId}`
                }
            )
    }
}